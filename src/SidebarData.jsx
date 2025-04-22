import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import QuizIcon from '@mui/icons-material/Quiz';
import StarIcon from '@mui/icons-material/Star';

export const SidebarData = [
    {
        title: "Menu",
        icon: <HomeIcon />,
        link: "/coding_lingo/menu"
    },
    {
        title: "Rank",
        icon: <StarIcon />,
        link: "/coding_lingo/Ranked"
    },
    {
        title: "Quiz",
        icon: <QuizIcon />,
        link: "/quiz" 
    },
    {
        title: "GitHub",
        icon: <GitHubIcon />,
        link: "https://github.com" 
    }
];