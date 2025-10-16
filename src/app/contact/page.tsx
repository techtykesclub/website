export default function ContactPage() {
	return (
		<div className="space-y-6 max-w-xl">
			<h1 className="text-3xl font-bold">Contact</h1>
			<p className="opacity-80">Have questions about programs, camps, or partnerships? Send us a note.</p>
			<form
				className="card space-y-4"
				action="https://formspree.io/f/your-form-id"
				method="POST"
			>
				<input className="w-full rounded-xl bg-white/10 px-3 py-2" name="name" placeholder="Your name" required />
				<input className="w-full rounded-xl bg-white/10 px-3 py-2" type="email" name="email" placeholder="Email" required />
				<textarea className="w-full rounded-xl bg-white/10 px-3 py-2" name="message" placeholder="How can we help?" rows={5} required />
				<button className="btn" type="submit">Send</button>
			</form>
			<p className="text-sm opacity-70">Tip: replace the form action with your Formspree / Formspark URL.</p>
		</div>
	);
}