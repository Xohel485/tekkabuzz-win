import { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw, Home, WifiOff, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorType: "general" | "network" | "firebase";
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null, errorType: "general" };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    let errorType: "general" | "network" | "firebase" = "general";
    const errorMsg = error.message.toLowerCase();
    if (errorMsg.includes("network") || errorMsg.includes("fetch") || errorMsg.includes("connection") || errorMsg.includes("offline")) {
      errorType = "network";
    } else if (errorMsg.includes("firebase") || errorMsg.includes("database") || errorMsg.includes("websocket")) {
      errorType = "firebase";
    }
    return { hasError: true, error, errorType };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleRefresh = () => { window.location.reload(); };
  handleGoHome = () => { window.location.href = "/"; };
  handleRetry = () => { this.setState({ hasError: false, error: null, errorInfo: null, errorType: "general" }); };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      const { errorType } = this.state;
      const isNetworkError = errorType === "network" || errorType === "firebase";
      const Icon = isNetworkError ? (errorType === "firebase" ? Database : WifiOff) : AlertTriangle;
      const title = isNetworkError ? "Connection Problem" : "Something went wrong";
      const description = isNetworkError
        ? "We're having trouble connecting. Please check your internet connection and try again."
        : "Something unexpected happened. Please try refreshing the page.";

      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-card border border-border rounded-xl p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${isNetworkError ? "bg-yellow-500/10" : "bg-destructive/10"}`}>
                <Icon className={`w-8 h-8 ${isNetworkError ? "text-yellow-500" : "text-destructive"}`} />
              </div>
            </div>
            <h1 className="text-xl font-heading font-bold text-foreground mb-2">{title}</h1>
            <p className="text-muted-foreground text-sm mb-6">{description}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {isNetworkError && (
                <Button onClick={this.handleRetry} className="gap-2">
                  <RefreshCw className="w-4 h-4" /> Try Again
                </Button>
              )}
              <Button onClick={this.handleRefresh} variant={isNetworkError ? "outline" : "default"} className="gap-2">
                <RefreshCw className="w-4 h-4" /> Refresh Page
              </Button>
              <Button onClick={this.handleGoHome} variant="outline" className="gap-2">
                <Home className="w-4 h-4" /> Go Home
              </Button>
            </div>
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-xs text-muted-foreground cursor-pointer">Error Details (Dev)</summary>
                <pre className="mt-2 p-3 bg-secondary rounded-lg text-xs text-destructive overflow-auto max-h-40">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
