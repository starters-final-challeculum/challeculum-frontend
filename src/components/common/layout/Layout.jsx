import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

// 각 페이지 컴포넌트에서 withLayout 함수를 사용하여 공통된 레이아웃을 적용할 수 있습니다.
// 예를 들어, HomePage 컴포넌트를 withLayout 함수로 감싸면 다음과 같이 공통된 레이아웃이 적용됩니다.
// function HomePage() {
//   return <div>PublicMainPage page content</div>;
// }
//
// export default withLayout(HomePage);
function Layout({ children }) {
  const isAuthenticated = !!localStorage.getItem('Authorization');
  return (
    <div className="flex flex-col min-h-screen">
      <Header isAuthenticated={isAuthenticated} />
      <div className="flex-1 bg-gray-100">
        <div className="container mx-auto max-w-screen-xl px-4 py-8">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function withLayout(Component) {
  return function WrappedComponent(props) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
}
