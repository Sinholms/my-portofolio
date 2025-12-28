import HeroSection from '@/components/herosection'
import AboutSection from '@/components/aboutsection'
import SkillsSection from '@/components/skillsection'
import ProjectsSection from '@/components/projectsection'
import ContactSection from '@/components/contactsection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}