// ---- LAYOUT
// Navbar
import { Navbar } from './layout/Navbar/Navbar';
import { NavbarButton } from './layout/Navbar/NavbarButton';
import { NavbarCurrentPage } from './layout/Navbar/NavbarCurrentPage';
import { NavbarList } from './layout/Navbar/NavbarList';
import { NavbarListItem } from './layout/Navbar/NavbarListItem';
import { ThemeButton } from './layout/Navbar/ThemeButton';
// Sidebar
import { Sidebar } from './layout/Sidebar/Sidebar';
import { HardSkills } from './layout/Sidebar/HardSkills';
import { Info } from './layout/Sidebar/Info';
import { Languages } from './layout/Sidebar/Languages';
import { Profile } from './layout/Sidebar/Profile/Profile';
import { ProfileAvatar } from './layout/Sidebar/Profile/ProfileAvatar';
import { ProfileName } from './layout/Sidebar/Profile/ProfileName';
import { ProfilePost } from './layout/Sidebar/Profile/ProfilePost';
import { Resume } from './layout/Sidebar/Resume';
import { Socials } from './layout/Sidebar/Socials';
import { SoftSkills } from './layout/Sidebar/SoftSkills';
import { Strengths } from './layout/Sidebar/Strengths';
// Footer
import Footer from './layout/Footer';

// --- HOC
import { PageWrapper } from './hoc/PageWrapper';
import { SectionWrapper } from './hoc/SectionWrapper';

// -- About
import About from './sections/About/About';
import { Hobbies } from './sections/About/Hobbies';
import { HobbiesCard } from './sections/About/HobbiesCard';
// -- Contact
import Contact from './sections/Contact/Contact';
import { ContactList, ContactListItem } from './sections/Contact/ContactList';
import { ContactInput } from './sections/Contact/ContactInput';
import { ContactForm } from './sections/Contact/ContactForm';
// -- Counters
import Counters from './sections/Counters/Counters';
import { Counter } from './sections/Counters/Counter';
// -- Courses
import Courses from './sections/Courses/Courses';
// -- Hero
import Hero from './sections/Hero/Hero';
import { HeroHeading } from './sections/Hero/HeroHeading';
import { HeroTyped } from './sections/Hero/HeroTyped';
// -- History
import History from './sections/History/History';
// -- Projects
import ProjectBanner from './sections/Project/ProjectBanner';
import ProjectInfo from './sections/Project/ProjectInfo';
import ProjectScreenshots from './sections/Project/ProjectScreenshots';
import Projects from './sections/Projects/Projects';
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

// ---- COMPONENTS
import { Background } from './Background';
import { Button, ButtonLink, ButtonGradient } from './Buttons';
import { Card } from './Card';
import { Fancybox } from './Fancybox';
import { Grid } from './Grid';
import { Logos, Logo } from './Logos';
import { Preloader } from './Preloader';
import { Progressbar } from './Progressbar';
import { SmoothScroll } from './SmoothScroll';
import { SplitText } from './SplitText';
import { SVGs } from './SVGs';
import { Swiper, SwiperNavigation } from './Swiper';
import { SectionTitle } from './Text';
import { Timeline, TimelineColumn, TimelineItem } from './Timeline';

export {
  // ---- LAYOUT ----
  Navbar,
  NavbarButton, NavbarCurrentPage, NavbarList, NavbarListItem, ThemeButton,
  Sidebar, HardSkills, Info, Languages, Profile, ProfileAvatar, ProfileName, ProfilePost, Resume, Socials, SoftSkills, Strengths,
  Footer,
  // ---- HOC ----
  PageWrapper, SectionWrapper,
  // ---- SECTIONS ----
  About, Hobbies, HobbiesCard,
  Contact, ContactForm, ContactInput, ContactList, ContactListItem,
  Counters, Counter,
  Courses,
  Hero, HeroHeading, HeroTyped,
  History,
  ProjectBanner, ProjectInfo, ProjectScreenshots,
  Projects, ProjectsFilters, FilterItem, ProjectsGrid, ProjectsSwiper,
  Services, ServicesCard,
  Technologies, TechnologiesGrid, TechnologiesSwiper,
  // ---- COMPONENTS ----
  Background,
  Button, ButtonLink, ButtonGradient,
  Card,
  Fancybox,
  Grid,
  Logos,
  Logo,
  Preloader,
  Progressbar,
  SmoothScroll,
  SplitText,
  SVGs,
  Swiper,
  SwiperNavigation,
  SectionTitle,
  Timeline, TimelineColumn, TimelineItem,
};
