import { DeferredEffects } from "@/components/global/DeferredEffects";
import { HomeClient } from "@/components/layout/HomeClient";

export default function Home() {
  return (
    <>
      <DeferredEffects />
      <HomeClient />
    </>
  );
}
