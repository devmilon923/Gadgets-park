import { Bar, BarChart, ResponsiveContainer, Tooltip, YAxis } from 'recharts';

export default function Chart({ data }) {
  return (
    <div className="text-center py-6 lg:py-12" style={{ width: '100%', height: '500px' }}>
      <ResponsiveContainer width="100%" height="100%">
        
        <BarChart data={data}>
            <YAxis/>
        <Tooltip />
          <Bar dataKey="price" fill="#8884d8" />
          
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
