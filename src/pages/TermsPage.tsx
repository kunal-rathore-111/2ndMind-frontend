import { ExtraPagesNav } from "../components/Shared/ExtraPagesNav";
import { Card } from "../components/Shared/CardofComps";
import { FooterComp } from "../components/Shared/Footer";
import { BackToHome } from "../components/Button/BackToHome";


export function TermsPage() {
    return <div className="flex flex-col bg-black/98 text-white">
        <ExtraPagesNav navHeading="2ndMind" navSubHeading="Terms" useFor="others" />
        <section className="pt-34 flex flex-col px-10 lg:px-80 ">
            <h1 className="text-5xl font-semibold mb-4 transition-colors duration-500">Terms of Service</h1>
            <p className="text-white/60">Last updated: Feburary 3, 2026</p>

            <section className="flex flex-col">
                <Card title="Agreement to Terms" description={`By accessing or using 2ndMind ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.`} classname={""} />

                <Card title="Accounts" description={`When you create an account with us, you must provide accurate, complete, and current information. You are responsible for: We reserve the right to refuse service, terminate accounts, or remove or edit content at our sole discretion.`} points={[
                    `Safeguarding your password`,
                    `All activities that occur under your account`,
                    `Notifying us immediately of any unauthorized use`,
                    `Ensuring your account information remains accurate and up-to-date`
                ]} classname={""} />

                <Card title="Acceptable Use" description={`You agree not to use the Service to:`} points={[
                    `Violate any laws or regulations`,
                    `Infringe on intellectual property rights of others`,
                    `Transmit viruses, malware, or other malicious code`,
                    `Harass, abuse, or harm another person`,
                    `Post spam, misleading, or deceptive content`,
                    `Attempt to gain unauthorized access to our systems`,
                    `Interfere with or disrupt the Service`
                ]} classname={""} />

                <Card title="Your Content" description={`You retain all rights to the content you save and create on 2ndMind. By using our Service, you grant us a license to: You are solely responsible for the content you save and share. We do not endorse, support, represent, or guarantee the accuracy or reliability of any content.`} points={[
                    `Store and display your content`,
                    `Share your content when you explicitly choose to make it public`,
                    `Back up and secure your content`
                ]} classname={""} />

                <Card title="Free Service" description={`2ndMind is currently provided free of charge. We reserve the right to:`} points={[
                    `Introduce paid features or plans in the future`,
                    `Modify or discontinue the Service (or any part thereof)`,
                    `Change these terms with notice to users`
                ]} classname={""} />

                <Card title="Disclaimer of Warranties" description={`The Service is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that:`} points={[
                    `The Service will be uninterrupted or error-free`,
                    `Defects will be corrected`,
                    `The Service is free of viruses or other harmful components`,
                    `Results obtained from using the Service will be accurate or reliable`
                ]} classname={""} />

                <Card title="Termination" description={`We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including if you breach these Terms. You may also terminate your account at any time by deleting it from your account settings.`} classname={""} />

                <Card title="Changes to Terms" description={`We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use our Service after revisions become effective, you agree to be bound by the revised terms.`} classname={""} />

                <div className="mt-6 text-white/80">
                    <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                    <p className="mb-2">If you have any questions about these Terms, please contact us:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>
                            Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kunalworkspace111@gmail.com" className="text-amber-300 hover:text-amber-200 hover:underline transition-colors duration-500" target="_blank" rel="noreferrer">kunalworkspace111@gmail.com</a>
                        </li>
                        <li>
                            Visit our <a href="/contact" className="text-amber-300 hover:text-amber-200 hover:underline transition-colors duration-500">contact page</a>
                        </li>
                    </ul>
                </div>
            </section>

        </section>
        <BackToHome />
        <FooterComp />
    </div>
}


