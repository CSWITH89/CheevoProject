import React from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';

const NBCardImage = () => (
  <Card>
    <CardItem>
      <Left>
        <Thumbnail
          source={{
            uri:
              'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          }}
        />
        <Body>
          <Text>Climbing In Asia</Text>
          <Text note>Climbing</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem>
      <Left>
        <Body>
          <Text>Latest:</Text>
        </Body>
      </Left>
      <Right>
        <Body>
          <Text>Climbed Mt Rinjani</Text>
        </Body>
      </Right>
    </CardItem>
    <CardItem>
      <Left>
        <Body>
          <Text note>12/15 Achievements</Text>
        </Body>
      </Left>
      <Right>
        <Text note>09/05/20</Text>
      </Right>
    </CardItem>
  </Card>
);

export default NBCardImage;
