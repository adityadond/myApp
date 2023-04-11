import { useContext } from "react";

import UserContext from './utils/UserContext';

const Footer = () => {
  const { user } = useContext(UserContext);
    return (
      <>
        <h4>This site is developed by {user.user} - {user.email}</h4>
      </>
    );
  };

  export default Footer;