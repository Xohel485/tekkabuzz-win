import { Routes, Route } from "react-router-dom";
import {
  BlogTakaBuzz, BlogTekkaBuzz, BlogTkkabuzz, BlogTakkabuzz, BlogTekkabaz,
  BlogTekabuzz, BlogTekaBuzz, BlogTeekabuzz, BlogTakkaBuzz, BlogTakkabuz,
  BlogTakkbuzz, BlogTekkBuzz, BlogTekkaBuzzLogin, BlogTekkabuzzLogin,
  BlogTekkaBuzzAffiliate, BlogTekkabuzzAffiliate, BlogTekkaBaji,
  BlogTekkaBuzzBangladesh, BlogTekkabuzzBengali, BlogTekkaBuzzBet,
  BlogTekkabuzzCasino, BlogTakaAllianceGaming,
} from "./AllBlogPages";

export default function BlogRouter() {
  return (
    <Routes>
      <Route path="taka-buzz" element={<BlogTakaBuzz />} />
      <Route path="tekka-buzz" element={<BlogTekkaBuzz />} />
      <Route path="tkkabuzz" element={<BlogTkkabuzz />} />
      <Route path="takkabuzz" element={<BlogTakkabuzz />} />
      <Route path="tekkabaz" element={<BlogTekkabaz />} />
      <Route path="tekabuzz" element={<BlogTekabuzz />} />
      <Route path="teka-buzz" element={<BlogTekaBuzz />} />
      <Route path="teekabuzz" element={<BlogTeekabuzz />} />
      <Route path="takka-buzz" element={<BlogTakkaBuzz />} />
      <Route path="takkabuz" element={<BlogTakkabuz />} />
      <Route path="takkbuzz" element={<BlogTakkbuzz />} />
      <Route path="tekk-buzz" element={<BlogTekkBuzz />} />
      <Route path="tekka-buzz-login" element={<BlogTekkaBuzzLogin />} />
      <Route path="tekkabuzz-login" element={<BlogTekkabuzzLogin />} />
      <Route path="tekka-buzz-affiliate" element={<BlogTekkaBuzzAffiliate />} />
      <Route path="tekkabuzz-affiliate" element={<BlogTekkabuzzAffiliate />} />
      <Route path="tekka-baji" element={<BlogTekkaBaji />} />
      <Route path="tekka-buzz-bangladesh" element={<BlogTekkaBuzzBangladesh />} />
      <Route path="tekkabuzz-bengali" element={<BlogTekkabuzzBengali />} />
      <Route path="tekka-buzz-bet" element={<BlogTekkaBuzzBet />} />
      <Route path="tekkabuzz-casino" element={<BlogTekkabuzzCasino />} />
      <Route path="taka-alliance-gaming" element={<BlogTakaAllianceGaming />} />
    </Routes>
  );
}
