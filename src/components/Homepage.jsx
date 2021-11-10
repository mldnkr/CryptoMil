import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;

function Homepage() {
  const { data, isFetching } = useGetCryptosQuery();

  if (isFetching) return "Loading...";

  return (
    <>
      <Title className="heading" level={2}>
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={data[0]?.active_markets}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(data[0]?.coins_count)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(data[0]?.total_mcap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(data[0]?.volume_ath)}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(data[0]?.mcap_ath)} />
        </Col>
      </Row>
    </>
  );
}

export default Homepage;
