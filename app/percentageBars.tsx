interface Percentage {
  value: number;
  label: string;
}

export default function PercentageBars() {
  const percentages: Percentage[] = [
    { value: 95, label: "React.js" },
    { value: 85, label: "TypeScript" },
    { value: 70, label: "Node.js" },
    { value: 100, label: "Misremembering song lyrics" }
  ];

  return (
    <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
      {percentages.map((percentage) => (
        <div key={percentage.label} className="pt-6">
          <div className="flex items-end justify-between">
            <h4 className="font-body font-semibold uppercase text-black">
              TypeScript
            </h4>
            <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
          </div>
          <div className="mt-2 h-3 w-full rounded-full bg-lila">
            <div
              className="h-3 rounded-full bg-primary"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
