import HeroSection from '@/components/herosection'
import AboutSection from '@/components/aboutsection'
import ServicesSection from '@/components/servicessection'
import SkillsSection from '@/components/skillsection'
import ExperienceSection from '@/components/experiencesection'
import ProjectsSection from '@/components/projectsection'
import ContactSection from '@/components/contactsection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}
