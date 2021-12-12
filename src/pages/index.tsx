import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="h-full flex items-center justify-center">
        <div className="prose">
          <h1 className="mb-2">
            Hi, we're Next.js & Netlify CMS<span className="text-cyan-600">.</span>
          </h1>
          <span className="handle">@nextjs-netlify-blog</span>
          <h2>A blog template with Next.js and Netlify.</h2>
          <SocialList />
        </div>
      </div>
    </Layout>
  );
}
