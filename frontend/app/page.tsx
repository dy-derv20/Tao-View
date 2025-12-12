import SubnetListPanel from "../components/SubnetListPanel";
import R3FScene from "../components/R3FScene";

export default function HomePage() {
  return (
    <main className="w-full h-screen bg-gray-900 relative">
      {/* 3D visualization layer */}
      <R3FScene />

      {/* UI overlay */}
      <SubnetListPanel />
    </main>
  );
}
