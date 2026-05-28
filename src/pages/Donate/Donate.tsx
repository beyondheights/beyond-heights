import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowLeft, Check, Upload, Loader2, AlertCircle, Copy } from 'lucide-react';
import { GOOGLE_SHEETS_WEB_APP_URL } from './config';

const presetAmounts = [500, 1000, 2000, 5000, 10000];

const Donate: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
  });
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null);
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCopyUPI = () => {
    navigator.clipboard.writeText('9363486261@ptsbi');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePresetClick = (val: number) => {
    setSelectedPreset(val);
    setCustomAmount('');
    setForm({ ...form, amount: String(val) });
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedPreset(null);
    setForm({ ...form, amount: e.target.value });
  };

  const handleScreenshotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setScreenshot(file);
      setScreenshotPreview(URL.createObjectURL(file));
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      let screenshotBase64 = '';
      let screenshotName = '';
      let screenshotMimeType = '';

      if (screenshot) {
        screenshotBase64 = await fileToBase64(screenshot);
        screenshotName = screenshot.name;
        screenshotMimeType = screenshot.type;
      }

      const params = new URLSearchParams();
      params.append('name', form.name);
      params.append('email', form.email);
      params.append('phone', form.phone);
      params.append('amount', form.amount);
      if (screenshotBase64) {
        params.append('screenshot', screenshotBase64);
        params.append('screenshotName', screenshotName);
        params.append('screenshotMimeType', screenshotMimeType);
      }

      console.log('📤 Sending donation to Google Sheets...');
      await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: params,
      });
      console.log('✅ Donation sent successfully');

      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-md w-full text-center space-y-8">
          <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
            <Check size={40} className="text-green-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black italic text-white uppercase tracking-tighter">
            Thank You!
          </h1>
          <p className="text-neutral-400 font-medium leading-relaxed">
            Your donation has been received. We'll verify the payment and reach out to you shortly.
          </p>
          <Link
            to="/"
            className="inline-block bg-[#05112D] text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 pt-32 pb-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left: QR Code & Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-red-500">
                <Heart size={28} fill="currentColor" />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-red-400">Make a Difference</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black italic text-white uppercase tracking-tighter leading-[0.9]">
                Scan & <br />
                <span className="text-red-500">Donate</span>
              </h1>
              <p className="text-neutral-400 font-medium leading-relaxed max-w-md">
                Scan the QR code to pay via UPI, then upload the screenshot to confirm your donation.
              </p>
            </div>

            {/* QR Code and UPI ID */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-4 flex items-center justify-center max-w-xs overflow-hidden shadow-lg shadow-white/5">
                <img 
                  src="https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/marathon/QR-amount.jpeg" 
                  alt="UPI QR Code" 
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>

              <div className="max-w-xs bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex items-center justify-between gap-3">
                <div className="space-y-1">
                  <span className="block text-[9px] font-black uppercase tracking-wider text-neutral-500">UPI ID</span>
                  <span className="block text-sm font-bold text-white font-mono select-all">9363486261@ptsbi</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyUPI}
                  className="p-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-all active:scale-95 flex items-center justify-center"
                  title="Copy UPI ID"
                >
                  {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            <p className="text-neutral-600 text-[10px] font-bold uppercase tracking-wider leading-relaxed">
              UPI / GPay / PhonePe / Paytm accepted
            </p>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 bg-[#111111] border border-neutral-800 rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-5 py-4 text-sm font-bold text-white focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all outline-none placeholder:text-neutral-600"
                  placeholder="Your full name"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-5 py-4 text-sm font-bold text-white focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all outline-none placeholder:text-neutral-600"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Phone</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-5 py-4 text-sm font-bold text-white focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all outline-none placeholder:text-neutral-600"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* Donation Amount */}
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Donation Amount (₹)</label>
                <div className="flex flex-wrap gap-3">
                  {presetAmounts.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handlePresetClick(val)}
                      className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                        selectedPreset === val
                          ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                          : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:border-red-500/50 hover:text-white'
                      }`}
                    >
                      ₹{val.toLocaleString()}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  value={customAmount}
                  onChange={handleCustomChange}
                  placeholder="Or enter custom amount"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-5 py-4 text-sm font-bold text-white focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all outline-none placeholder:text-neutral-600"
                />
              </div>

              {/* Screenshot Upload */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Payment Screenshot</label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full bg-neutral-900 border-2 border-dashed border-neutral-700 hover:border-red-500/50 rounded-lg p-8 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300"
                >
                  {screenshotPreview ? (
                    <div className="relative w-full max-w-xs">
                      <img src={screenshotPreview} alt="Screenshot preview" className="w-full rounded-lg" />
                      <p className="text-center text-xs text-neutral-500 font-bold mt-2">{screenshot?.name}</p>
                    </div>
                  ) : (
                    <>
                      <Upload size={32} className="text-neutral-600" />
                      <span className="text-neutral-500 text-xs font-bold uppercase tracking-wider">Click to upload payment screenshot</span>
                      <span className="text-neutral-700 text-[10px] font-bold uppercase tracking-wider">PNG, JPG or WEBP</span>
                    </>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={handleScreenshotChange}
                  className="hidden"
                />
              </div>

              {/* Error */}
              {error && (
                <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-lg px-5 py-4">
                  <AlertCircle size={18} className="text-red-400 shrink-0" />
                  <span className="text-red-400 text-xs font-bold uppercase tracking-wider">{error}</span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-4 rounded-full text-xs font-black uppercase tracking-[0.25em] hover:from-red-500 hover:to-red-400 transition-all duration-300 active:scale-[0.98] shadow-xl shadow-red-600/30 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  `Submit Donation${form.amount ? ` — ₹${parseInt(form.amount).toLocaleString()}` : ''}`
                )}
              </button>

              <p className="text-center text-neutral-600 text-[10px] font-bold uppercase tracking-wider">
                Pay via UPI and upload the screenshot to complete your donation.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;