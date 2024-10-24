import { FeedMap } from "./_components/feed-map";

export default async function Page() {
  const feedsRes = await fetch(
    "https://api.transitapp.com/v3/feeds/static/full.json",
    { cache: "no-cache" }
  );
  const feeds = (await feedsRes.json()).feeds;
  const mapboxAccessToken = process.env["MAPBOX_ACCESS_TOKEN"];

  return <FeedMap mapboxAccessToken={mapboxAccessToken} feeds={feeds} />;
}
