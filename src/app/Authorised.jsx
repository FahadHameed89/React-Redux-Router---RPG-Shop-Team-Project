import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';

/**
 * Validates that there is a signed in profile otherwise redirect to the signing page.
 */
export default () => {
  const member = useSelector(state => state.member);
  const history = useHistory();

  useEffect(() => {
    if(!member || Object.keys(member).length === 0) {
      history.push("/");
    }
  }, [member, history]);

  return null;
}
