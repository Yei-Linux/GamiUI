import { Button } from "@gamiui/standard";
import withLayout from "./hocs/withLayout";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Test Button</Button>
    </main>
  );
}

export default withLayout(App);
