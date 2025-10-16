import faqs from "@/data/faqs.json";

export default function FAQPage() {
	return (
		<div className="space-y-6">
			<h1 className="text-3xl font-bold">FAQ</h1>
			<div className="space-y-4">
				{faqs.map((f, i) => (
					<details key={i} className="card">
						<summary className="cursor-pointer text-lg font-semibold">{f.q}</summary>
						<div className="opacity-90 mt-2 space-y-2">
							{Array.isArray(f.a) ? f.a.map((p, idx) => <p key={idx}>{p}</p>) : <p>{f.a}</p>}
						</div>
					</details>
				))}
			</div>
		</div>
	);
}