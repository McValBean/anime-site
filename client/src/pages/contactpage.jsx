import NavigationBar from "../components/navigationBar";
import { Mail, Phone } from "lucide-react";

export default function ContactPage(){
    return(
        <>
        <NavigationBar />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-700 max-w-2xl text-center">
                Have questions or feedback? We'd love to hear from you! Reach out to us through the contact information below.
            </p>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <div className="flex space-x-4">
                <a href="mailto:info@animeworld.com" className="flex items-center space-x-2 text-blue-500 hover:text-blue-700">
                    <Mail />
                    <span>Email</span>
                </a>
                <a href="tel:+1234567890" className="flex items-center space-x-2 text-blue-500 hover:text-blue-700">
                    <Phone />
                    <span>Phone</span>
                </a>
            </div>
        </div>
        </>
    )}