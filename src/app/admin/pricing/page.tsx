import type { Metadata } from "next";
import { Plus, Edit, Star } from "lucide-react";

export const metadata: Metadata = { title: "Pricing Plans" };

const plans = [
  { id: "1", name: "Starter", price: "₹15,000", billing: "one-time", description: "For small businesses and startups", features: 8, highlighted: false, status: "ACTIVE" },
  { id: "2", name: "Professional", price: "₹45,000", billing: "one-time", description: "For growing businesses", features: 15, highlighted: true, status: "ACTIVE" },
  { id: "3", name: "Enterprise", price: "Custom", billing: "project-based", description: "For large organizations", features: 999, highlighted: false, status: "ACTIVE" },
];

export default function PricingAdminPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#0a0a08]">Pricing Plans</h1>
          <p className="text-sm text-slate-500">{plans.length} plans configured</p>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#0a0a08] rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all">
          <Plus className="w-3.5 h-3.5" /> Add Plan
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <div key={plan.id} className={`p-5 rounded-2xl border transition-all ${plan.highlighted ? "bg-indigo-500/10 border-indigo-500/30" : "bg-black/[0.02] border-black/[0.08]"}`}>
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  {plan.highlighted && <Star className="w-3.5 h-3.5 text-indigo-400 fill-indigo-400" />}
                  <h3 className="text-sm font-bold text-[#0a0a08]">{plan.name}</h3>
                </div>
                <p className="text-xs text-slate-500">{plan.description}</p>
              </div>
              <button className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-400 hover:bg-black/[0.06] transition-all"><Edit className="w-3.5 h-3.5" /></button>
            </div>
            <p className="text-2xl font-bold text-[#0a0a08] mb-1">{plan.price}</p>
            <p className="text-xs text-slate-500 mb-3">{plan.billing}</p>
            <p className="text-xs text-slate-400">{plan.features === 999 ? "Unlimited features" : `${plan.features} features included`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
