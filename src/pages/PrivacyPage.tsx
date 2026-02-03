import { Eye, FileText, Shield, Lock, type LucideIcon, Database, UserCheck } from "lucide-react";
import { ExtraPagesNav } from "../components/Shared/ExtraPagesNav";
import { useEffect } from "react";
import { FooterComp } from "../components/Shared/Footer";
import { Card } from "../components/Shared/CardofComps";
import { BackToHome } from "../components/Button/BackToHome";


interface ListDTO {
    icon: LucideIcon,
    title: string
}


const ListofContent: ListDTO[] = [
    { icon: Shield, title: "Introduction" },
    { icon: Database, title: "Information We Collect" },
    { icon: Eye, title: "How We Use Your Information" },
    { icon: UserCheck, title: "Data Sharing & Disclosure" },
    { icon: Lock, title: "Data Security" },
    { icon: FileText, title: "Your Rights" }
]

export function PrivacyPage() {

    useEffect(() => {
        scrollTo(0, 0)
    }, [])

    return <div className="bg-black flex flex-col ">
        <ExtraPagesNav />

        {/* full main content */}
        <div className="pt-36 pb-16 px-8 lg:px-28 text-white flex flex-col gap-9 ">

            {/* hero of privacy */}
            <section className="flex flex-col gap-5 w-full items-center text-center">
                <div className="w-18 h-18 flex items-center justify-center bg-white rounded-xl ">
                    <Shield className="h-12 w-12 text-black" />
                </div>
                <h1 className="text-6xl font-bold"> Privacy Policy
                </h1>
                <span>
                    Your privacy is our priority. Here's how we protect your data.
                </span>
                <span className="text-sm text-gray-400">
                    Last updated: Feb 3, 2026
                </span>
            </section>

            {/* main content of privacy */}
            <div className="grid lg:grid-cols-4 gap-8 dark:text-white">

                <div className="min-w-80 col-span-1 p-5 flex flex-col gap-6 lg:sticky top-24 self-start">
                    <h4 className="font-bold">
                        Table of contents</h4>
                    <div className="flex flex-col gap-2">
                        {ListofContent.map(x => {
                            const Icon = x.icon
                            return <span className="flex items-center px-4 py-1 gap-2 hover:dark:bg-gray-700 rounded-sm text-gray-400 hover:dark:text-white hover:scale-105 transition-all duration-400 cursor-pointer">
                                <Icon className="w-4 h-4" /> {x.title}
                            </span>
                        })}
                    </div>
                </div>

                <div className="flex flex-col col-span-3 gap-4">
                    <Card Icon={Shield} title="Introduction" description={`Welcome to 2ndMind (" we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our service.`} classname={"yellow-300"} />

                    <Card Icon={Database} title="Information We Collect" description={`We collect information that you provide directly to us:`} points={[
                        `Account information (username, email address, password)`,
                        `Content you save (links, titles, descriptions, tags)`,
                        `Usage data (how you interact with our service)`,
                        `Device information (browser type, IP address, operating system)`
                    ]} classname={'blue-400'} />

                    <Card Icon={Eye} title="How We Use Your Information" description={`We use the information we collect to:`} points={[
                        `Provide, maintain, and improve our service`,
                        `Process and complete your requests`,
                        `Send you technical notices and support messages`,
                        `Communicate with you about products, services, and events`,
                        `Monitor and analyze trends, usage, and activities`,
                        `Detect, prevent, and address technical issues and security threats`
                    ]} classname={'green-400'} />

                    <Card Icon={UserCheck} title="Data Sharing & Disclosure" description={`We do not sell your personal information. We may share your information only in these limited circumstances:`} points={[
                        `With your consent: When you choose to share collections publicly`,
                        `For legal reasons: If required by law or to protect our rights`,
                        `Service providers: With vendors who help us operate our service`
                    ]} classname={'red-400'} />

                    <Card Icon={Lock} title="Data Security" description={`We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`} classname={'purple-400'} />

                    <Card Icon={FileText} title="Your Rights" description={`You have the right to:`} points={[
                        `Access your personal information`,
                        `Correct inaccurate or incomplete data`,
                        `Request deletion of your account and data`,
                        `Export your data`,
                        `Opt-out of marketing communications`
                    ]} classname={'cyan-400'} />
                </div>

                <BackToHome />
            </div>
        </div >

        <FooterComp></FooterComp>
    </div>
}


