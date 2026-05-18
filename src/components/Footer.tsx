import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Linkedin, Twitter } from 'lucide-react'
import { FIRM } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-white/[0.06]">
      <div className="container-law py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="mb-5">
            <p className="font-serif text-2xl font-light tracking-[0.12em] text-white">MERIDIAN</p>
            <p className="text-[9px] tracking-[0.35em] uppercase text-gold-500 font-medium">Law Group</p>
          </div>
          <p className="text-sm text-dark-400 leading-relaxed mb-6">
            Precision. Integrity. Results. Trusted by India's leading corporations since {FIRM.founded}.
          </p>
          <div className="flex gap-3">
            <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-sm border border-white/10 text-dark-400 hover:border-gold-500/40 hover:text-gold-400 transition-all">
              <Linkedin size={15} />
            </a>
            <a href="#" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-sm border border-white/10 text-dark-400 hover:border-gold-500/40 hover:text-gold-400 transition-all">
              <Twitter size={15} />
            </a>
          </div>
        </div>

        {/* Practice */}
        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase text-gold-500 font-medium mb-5">Practice Areas</h4>
          <ul className="space-y-2.5 text-sm text-dark-400">
            {['Mergers & Acquisitions', 'Corporate Governance', 'Commercial Litigation', 'Regulatory & Compliance', 'Real Estate', 'Intellectual Property'].map(a => (
              <li key={a}><Link to="/practice" className="hover:text-gold-400 transition-colors">{a}</Link></li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase text-gold-500 font-medium mb-5">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-dark-400">
            {[
              { to: '/about', label: 'About the Firm' },
              { to: '/lawyers', label: 'Our Lawyers' },
              { to: '/results', label: 'Case Results' },
              { to: '/blog', label: 'Legal Insights' },
              { to: '/booking', label: 'Book Consultation' },
              { to: '/contact', label: 'Contact Us' },
            ].map(l => (
              <li key={l.to}><Link to={l.to} className="hover:text-gold-400 transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase text-gold-500 font-medium mb-5">Contact</h4>
          <ul className="space-y-4 text-sm text-dark-400">
            <li className="flex gap-3">
              <MapPin size={15} className="text-gold-500 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">{FIRM.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={15} className="text-gold-500 flex-shrink-0" />
              <a href={`tel:${FIRM.phone}`} className="hover:text-gold-400 transition-colors">{FIRM.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail size={15} className="text-gold-500 flex-shrink-0" />
              <a href={`mailto:${FIRM.email}`} className="hover:text-gold-400 transition-colors">{FIRM.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.05]">
        <div className="container-law py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-dark-500">
          <p>© {new Date().getFullYear()} Meridian Law Group. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold-400 transition-colors">Terms of Use</Link>
            <Link to="/disclaimer" className="hover:text-gold-400 transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
