// ---- COMPONENTS
import { Background } from './components/Background';
import { Card } from './components/Card';
import { Fancybox } from './components/Fancybox';
import { Laptop } from './components/Laptop/Laptop';
import { Scene } from './components/Laptop/Scene';
import { Logos, Logo } from './components/Logos';
import { Preloader } from './components/Preloader';
import { Progressbar } from './components/Progressbar';
import { SplitText } from './components/SplitText';
import { Swiper, SwiperNavigation } from './components/Swiper';
import { SectionTitle } from './components/Text';
import { Timeline } from './components/Timeline/Timeline';
import { TimelineColumn } from './components/Timeline/TimelineColumn';
import { TimelineItem } from './components/Timeline/TimelineItem';

// --- HOC
import { PageWrapper } from './hoc/PageWrapper';
import { SectionWrapper } from './hoc/SectionWrapper';

// ---- LAYOUT
import Footer from './layout/Footer/Footer';
import { Navbar } from './layout/Navbar/Navbar';
import { NavbarButton } from './layout/Navbar/NavbarButton';
import { NavbarCurrentPage } from './layout/Navbar/NavbarCurrentPage';
import { NavbarList } from './layout/Navbar/NavbarList';
import { NavbarListItem } from './layout/Navbar/NavbarListItem';
import { ThemeButton } from './layout/Navbar/ThemeButton';
import { HardSkills, HardSkillsItem } from './layout/Sidebar/HardSkills';
import { Info, InfoItem } from './layout/Sidebar/Info';
import { Languages, LanguagesItem } from './layout/Sidebar/Languages';
import { Profile, Avatar, Name, Post } from './layout/Sidebar/Profile';
import { Resume } from './layout/Sidebar/Resume';
import { Sidebar } from './layout/Sidebar/Sidebar';
import { Socials, SocialsItem } from './layout/Sidebar/Socials';
import { SoftSkills } from './layout/Sidebar/SoftSkills';
import { Strengths } from './layout/Sidebar/Strengths';

// ---- PAGES
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CoursePage from './pages/CoursePage';
import HistoryPage from './pages/HistoryPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import ProjectsPage from './pages/ProjectsPage';
import TechnologiesPage from './pages/TechnologiesPage';

// ---- ROUTES
import { PageRoutes } from './routes/Routes';

// ---- SECTIONS
// -- About
import About from './sections/About/About';
import { Hobbies } from './sections/About/Hobbies';
import { HobbiesCard } from './sections/About/HobbiesCard';
// -- Contact
import Contact from './sections/Contact/Contact';
import { ContactCard } from './sections/Contact/ContactCard';
import { ContactCardItem } from './sections/Contact/ContactCardItem';
import { ContactForm } from './sections/Contact/ContactForm';
// -- Counters
import Counters from './sections/Counters/Counters';
import { Counter } from './sections/Counters/Counter';
// -- Courses
import Courses from './sections/Courses/Courses';
// -- Hero
import Hero from './sections/Hero/Hero';
import { HeroButton } from './sections/Hero/HeroButton';
import { HeroHeading } from './sections/Hero/HeroHeading';
import { HeroTyped } from './sections/Hero/HeroTyped';
// -- History
import History from './sections/History/History';
// -- Projects
import Projects from './sections/Projects/Projects';
import { ProjectsCard } from './sections/Projects/ProjectsCard';
import { ProjectsFilters, FilterItem } from './sections/Projects/ProjectsFilters';
import { ProjectsGrid } from './sections/Projects/ProjectsGrid';
import { ProjectsSwiper } from './sections/Projects/ProjectsSwiper';
// -- Services
import Services from './sections/Services/Services';
import { ServicesCard } from './sections/Services/ServicesCard';
// -- Technologies
import Technologies from './sections/Technologies/Technologies';
import { TechnologiesGrid } from './sections/Technologies/TechnologiesGrid';
import { TechnologiesSwiper } from './sections/Technologies/TechnologiesSwiper';

export {
  // ---- COMPONENTS ----
  Background,
  Card,
  Fancybox,
  Laptop, Scene,
  Logos, Logo,
  Preloader,
  Progressbar,
  SplitText,
  Swiper, SwiperNavigation,
  SectionTitle,
  Timeline, TimelineColumn, TimelineItem,

  // ---- HOC ----
  PageWrapper, SectionWrapper,

  // ---- LAYOUT ----
  Footer,
  Navbar, NavbarButton, NavbarCurrentPage, NavbarList, NavbarListItem, ThemeButton,
  Sidebar, HardSkills, HardSkillsItem, Info, InfoItem, Languages, LanguagesItem, Profile, Avatar, Name, Post, Resume, Socials, SocialsItem, SoftSkills, Strengths,

  // ---- PAGES ----
  AboutPage, ContactPage, CoursePage, HistoryPage, HomePage, NotFound, ProjectsPage, TechnologiesPage,

  // ---- ROUTES ----
  PageRoutes,

  // ---- SECTIONS ----
  About, Hobbies, HobbiesCard,
  Contact, ContactCard, ContactCardItem, ContactForm,
  Counters, Counter,
  Courses,
  Hero, HeroButton, HeroHeading, HeroTyped,
  History,
  Projects, ProjectsCard, ProjectsFilters, FilterItem, ProjectsGrid, ProjectsSwiper,
  Services, ServicesCard,
  Technologies, TechnologiesGrid, TechnologiesSwiper,
};
