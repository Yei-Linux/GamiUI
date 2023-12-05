"use client";
import withLayout from "@/hocs/withLayout";
import { Button, useGamiTheme } from "@gamiui/standard";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Test Button</Button>
    </main>
  );
};

export default withLayout(Home);
