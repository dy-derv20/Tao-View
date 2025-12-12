import SubnetListPanel from "@/components/SubnetListPanel";
import SubnetChart from "@/components/SubnetChart";

export default function SubnetsPage() {
  return (
    <div className="w-full min-h-screen flex">
      
      {/* Left sidebar panel */}
      <div className="w-72 border-r border-gray-800 p-4">
        <SubnetListPanel />
      </div>

      {/* Main visualization area */}
      <div className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-6">Subnet Overview</h1>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-xl">
          <SubnetChart />
        </div>
      </div>

    </div>
  );
}
