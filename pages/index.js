import axios from 'axios';
import Head from 'next/head';
import { Divider, Header, Loader } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css';
import useSWR from 'swr';

const fetcher = async (...args) => {
  const res = await fetch(...args);
  return res.json();
};

export default function Home({ list }) {
  const { data, error } = useSWR('/api/name', fetcher);

  if (error) {
    return <div>Error...</div>;
  }

  if (!data) {
    return <div>isLoading...</div>;
  }

  console.log(data);

  return data.name.map((item) => (
    <div style={{ marginTop: 10, marginBottom: 10 }}>
      <div>id: {item.id}</div>
      <div>text: {item.text}</div>
    </div>
  ));

  // return (
  //   <div>
  //     <Head>
  //       <title>test</title>
  //     </Head>
  //     <Header as="h3" style={{ paddingTop: 40 }}>
  //       베스트 상품
  //     </Header>
  //     <Divider />
  //     <ItemList list={list.slice(0, 9)} />
  //     <Header as="h3" style={{ paddingTop: 40 }}>
  //       신상품
  //     </Header>
  //     <Divider />
  //     <ItemList list={list.slice(9)} />
  //   </div>
  // );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
