import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  return (
    <>
      <a href="https://github.com/windyoktia" target={"_blank"}>
        <img src="/github.png"
        style={{"width":"100%"}}
        alt="" srcset="" />
      </a>
    </>
  );
};



export default GithubPage;
