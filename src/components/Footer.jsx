import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <footer className="w-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-200 mb-3 p-5 rounded-md border border-zinc-300 dark:border-zinc-700 mt-3 lg:mt-10">
                <Link to="/" ><img src="/img/icon.png" className="scale-x-[-1] w-32 mb-3 mx-auto xl:mx-0" alt="footer logo" /></Link>
                <section className="flex flex-col xl:flex-row xl:justify-between xl:gap-10">
                    <div className="mb-5 xl:mb-0">
                        <p className="font-medium text-lg mb-2">About Us</p>
                        <div className="flex flex-col gap-2">
                            <a className="text-zinc-600/50 hover:text-zinc-600 dark:text-zinc-200/50 dark:hover:text-zinc-200 transition-colors" href="#">About Us</a>
                            <a className="text-zinc-600/50 hover:text-zinc-600 dark:text-zinc-200/50 dark:hover:text-zinc-200 transition-colors" href="#">Contact Us</a>
                            <a className="text-zinc-600/50 hover:text-zinc-600 dark:text-zinc-200/50 dark:hover:text-zinc-200 transition-colors" href="#">FAQ</a>
                        </div>
                    </div>
                    <div className="mb-5 xl:mb-0">
                        <p className="font-medium text-lg mb-2">Services</p>
                        <div className="flex flex-col gap-2">
                            <a className="text-zinc-600/50 hover:text-zinc-600 dark:text-zinc-200/50 dark:hover:text-zinc-200 transition-colors" href="#">Car Rental</a>
                            <a className="text-zinc-600/50 hover:text-zinc-600 dark:text-zinc-200/50 dark:hover:text-zinc-200 transition-colors" href="#">Prices & Terms</a>
                            <a className="text-zinc-600/50 hover:text-zinc-600 dark:text-zinc-200/50 dark:hover:text-zinc-200 transition-colors" href="#">Special Offers</a>
                        </div>
                    </div>
                    <div className="mb-5 xl:mb-0">
                        <p className="font-medium text-lg mb-2">Contact Information</p>
                        <div className="flex flex-col gap-2">
                            <p className="opacity-50">Address: Example Street, Ohoio</p>
                            <p className="opacity-50">Phone: +90 123 456 78 90</p>
                            <p className="opacity-50">Email: support@rentacar.com</p>
                        </div>
                    </div>
                    <div className="mb-5 xl:mb-0">
                        <p className="font-medium text-lg mb-2">Legal Information</p>
                        <div className="flex flex-col gap-2">
                            <a className="text-zinc-600/50 hover:text-zinc-600 dark:text-zinc-200/50 dark:hover:text-zinc-200 transition-colors" href="#">Privacy Policy</a>
                            <a className="text-zinc-600/50 hover:text-zinc-600 dark:text-zinc-200/50 dark:hover:text-zinc-200 transition-colors" href="#">Terms of Use</a>
                            <a className="text-zinc-600/50 hover:text-zinc-600 dark:text-zinc-200/50 dark:hover:text-zinc-200 transition-colors" href="#">Cancellation & Refund Policy</a>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium text-lg mb-2">Subscribe to Our Newsletter</p>
                        <div className="flex flex-col xl:flex-row gap-2">
                            <input className="w-full xl:w-96 dark:bg-zinc-700/50 rounded-md py-3 px-2 focus:outline-none" name="subscribe to our newsletter" placeholder="example@exmaple.com" type="text" />
                            <button className="py-3 bg-zinc-500/80 hover:bg-zinc-500 text-zinc-200 dark:bg-zinc-700/50 dark:hover:bg-zinc-700/80 px-2 transition-colors rounded-md mt-2 xl:mt-0 xl:ml-2">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </section>
                <p className="mt-5 text-center opacity-50">© {new Date().getFullYear()} Rent A Car | All Rights Reserved</p>
            </footer>
        </>
    )
}

export default Footer