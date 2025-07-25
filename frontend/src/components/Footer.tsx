'use client'

export function Footer() {
    const links = ['Features','Pricing','Documentation','Blog','Contact']
    return (
        <footer className="bg-gray-50 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2 mb-6 md:mb-0">
                        <div className="w-8 h-8 rounded-lg overflow-hidden">
                            <img
                                src="/dbd_logo.png"
                                alt="Discord Dashboard Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="text-xl font-bold gradient-text">iscord-Dashboard</span>
                    </div>
                    <div className="flex flex-wrap justify-center space-x-6">
                        {links.map((l,i) => (
                            <a key={i} href="#" className="text-gray-600 hover:text-purple-700 transition mb-4 md:mb-0">
                                {l}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 mb-4 md:mb-0">© 2025 Assistants Technologies. All rights reserved.<br/>Not affiliated with Discord.</p>
                    <div className="flex space-x-6">
                        {['github','twitter','planet'].map((icon,i) => (
                            <a key={i} href="#" className="text-gray-400 hover:text-purple-700 transition">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><use href={`#icon-${icon}`} /></svg>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}