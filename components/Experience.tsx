import React from 'react'

const Experience = () => {
  return (
    <div className="py-20 text-white" id="experience">
      <h1 className="text-center text-6xl font-bold mb-10">
        My <span className="bg-gradient-to-r from-[#fde047] via-[#f472b6] to-[#a855f7] bg-clip-text text-transparent">work experience</span>
      </h1>
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-10 px-4">
        {/* HSBC UK HQ */}
        <div className="bg-[rgba(18,18,28,0.8)] border-2 border-[#a855f740] rounded-lg p-6 shadow-lg">
          <h2 className="varela-round-regular text-2xl font-bold text-yellow-300">Software Support | HSBC </h2>
          <div className="text-sm text-neutral-400 mb-2">Jan 2025 – Apr 2025</div>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provided technical support for physical security management software systems.</li>
            <li>Monitored, maintained, and troubleshot software integrations, ensuring data integrity and operational continuity.</li>
            <li>Liaised with users, developers, and third-party vendors to diagnose and resolve complex software integration issues.</li>
            <li>Contributed to testing, configuration, and documentation for software updates and integration points.</li>
          </ul>
        </div>
        {/* Greystar */}
        <div className="bg-[rgba(18,18,28,0.8)] border-2 border-[#a855f740] rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl  varela-round-regular font-bold text-pink-300">IT Support Analyst | Greystar</h2>
          <div className="text-sm text-neutral-400 mb-2">Jan 2024 – Aug 2024</div>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provided onsite and remote 1st/2nd line support for hardware, software, and networking issues for over 200 end-users across multiple sites.</li>
            <li>Resolved technical issues (desktops, laptops, printers, peripherals), reducing average resolution time by 25%.</li>
            <li>Performed Windows OS installations, configurations, software deployments, and updates, ensuring compliance.</li>
            <li>Managed user accounts, permissions, and access control within Active Directory and other systems.</li>
            <li>Developed and maintained comprehensive troubleshooting guides and support documentation.</li>
            <li>Maintained accurate IT asset records.</li>
          </ul>
        </div>
        {/* Bournemouth University */}
        <div className="bg-[rgba(18,18,28,0.8)] border-2 border-[#a855f740] rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl varela-round-regular font-bold text-purple-300">Software Licensing Administrator | Bournemouth University</h2>
          <div className="text-sm text-neutral-400 mb-2">Oct 2022 – Oct 2023</div>
          <ul className="list-disc pl-5 space-y-1">
            <li>Delivered 1st and 2nd line deskside and remote support, collaborating effectively with Service Desk and 3rd line engineers.</li>
            <li>Managed IT service requests including access management, user account creation/modification, and hardware/software provisioning via ITSM tools.</li>
            <li>Streamlined IT onboarding and offboarding processes for efficient equipment and account management.</li>
          </ul>
        </div>
        {/* Orange */}
        <div className="bg-[rgba(18,18,28,0.8)] border-2 border-[#a855f740] rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl varela-round-regular font-bold text-orange-300">IT Administrator & Deskside Support Engineer | Orange</h2>
          <div className="text-sm text-neutral-400 mb-2">Sep 2020 – Oct 2022</div>
          <ul className="list-disc pl-5 space-y-1">
            <li>Delivered 1st and 2nd line deskside and remote support, collaborating effectively with Service Desk and 3rd line engineers.</li>
            <li>Managed IT service requests including access management, user account creation/modification, and hardware/software provisioning via ITSM tools.</li>
            <li>Streamlined IT onboarding and offboarding processes for efficient equipment and account management.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience