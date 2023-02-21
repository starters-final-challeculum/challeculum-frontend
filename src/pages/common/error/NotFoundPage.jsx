import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { withLayout } from '../../../components/common/layout/Layout';

function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Helmet>
        <title>Not Found | Challeculum</title>
      </Helmet>
      <h2 className="mb-3 text-2xl font-semibold">Page Not Found.</h2>
      <h4 className=" mb-5 text-base font-medium">
        The Page you are looking for does not exist or has moved.
      </h4>
      <Link className="text-lime-500 hover:underline" to="/">
        Go back home &rarr;
      </Link>

    </div>
  );
}

export default withLayout(NotFound);
