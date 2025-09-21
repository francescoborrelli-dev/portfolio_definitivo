interface KpiProps {
  label: string
  value: string
}

export default function Kpi({ label, value }: KpiProps) {
  return (
    <div className="border rounded-lg p-4 text-center">
      <div className="text-2xl font-bold text-gray-900 mb-1">
        {value}
      </div>
      <div className="text-sm text-gray-500">
        {label}
      </div>
    </div>
  )
}