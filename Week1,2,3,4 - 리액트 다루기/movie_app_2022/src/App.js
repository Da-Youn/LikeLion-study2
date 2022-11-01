import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [], // 로딩된 영화 데이터를 저장할 배열
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false }, 6000);
    });
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready!'}</div>;
  } // 나중에 영화 데이터를 'We are ready!'이 부분에 출력할 것
}

export default App;
