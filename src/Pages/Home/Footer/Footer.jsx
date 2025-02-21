const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h2 className="text-lg font-semibold text-white">Task Manager</h2>
                    <p className="mt-2 text-sm">Providing reliable tech solutions since 2010.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white">Services</h3>
                    <ul className="mt-2 space-y-2">
                        <li><a href="#" className="hover:text-green-400">Branding</a></li>
                        <li><a href="#" className="hover:text-green-400">Design</a></li>
                        <li><a href="#" className="hover:text-green-400">Marketing</a></li>
                        <li><a href="#" className="hover:text-green-400">Advertisement</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white">Company</h3>
                    <ul className="mt-2 space-y-2">
                        <li><a href="#" className="hover:text-green-400">About Us</a></li>
                        <li><a href="#" className="hover:text-green-400">Contact</a></li>
                        <li><a href="#" className="hover:text-green-400">Jobs</a></li>
                        <li><a href="#" className="hover:text-green-400">Press Kit</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                    <div className="flex space-x-4 mt-3">
                        <a href="#" className="hover:text-green-400">
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                        <a href="#" className="hover:text-green-400">
                            <i className="fab fa-facebook text-xl"></i>
                        </a>
                        <a href="#" className="hover:text-green-400">
                            <i className="fab fa-linkedin text-xl"></i>
                        </a>
                        <a href="#" className="hover:text-green-400">
                            <i className="fab fa-instagram text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 py-4 text-center text-sm">
                <p>&copy; 2025 Task Manager. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
