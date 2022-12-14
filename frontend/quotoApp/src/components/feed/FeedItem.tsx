import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ImageBackground,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import Video from 'react-native-video';
import {BlurView} from '@react-native-community/blur';

import info from '../info';

import {setFeedLike, setFeedDislike} from '../../api/feed';

import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Tooltip from 'react-native-walkthrough-tooltip';

import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/reducer';

interface Props {
  feed: Feed;
  handleCommentClick: Function;
  isAccessable: boolean;
}

interface Feed {
  feedId: number;
  userId: number;
  userImage: string;
  nickname: string;
  feedImage: string;
  feedTime: string;
  questName: string;
  questType: string;
  questPoint: number;
  expPoint: number;
  expGrade: string;
  likeStatus: string;
  likeCount: number;
  feedType: string;
  commentList: Comment[];
}

interface Comment {
  userId: number;
  commentContext: string;
  commentTime: string;
}

const {width, height} = Dimensions.get('window');

const questTypes: {
  [key: string]: {
    typeName: string;
    iconName: string;
    questColorCode: string;
    stamp: any;
  };
} = info.questTypes;

const levelInfo: {
  [key: string]: {
    gradeColorCode: string;
    colorName: string;
    nextColor: string;
    minPoint: number;
    maxPoint: number;
  };
} = info.levelInfo;

const timeToString = (time: string) => {
  let strArr = time.split('-');
  return `${strArr[0]}년 ${strArr[1]}월 ${strArr[2]}일`;
};

const FeedItem: React.FC<Props> = props => {
  const {
    feedId,
    userId,
    userImage,
    nickname,
    feedImage,
    feedTime,
    questName,
    questType,
    questPoint,
    expPoint,
    expGrade,
    likeStatus,
    likeCount,
    commentList,
    feedType,
  } = props.feed;

  const {handleCommentClick, isAccessable} = props;

  const {typeName, iconName, questColorCode} = questTypes[questType];
  const {colorName, gradeColorCode} = levelInfo[expGrade];

  const [isLike, setIsLike] = useState(likeStatus === 'LIKE' ? true : false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const myNickname = useSelector((state: RootState) => state.user.nickname);
  const navigation = useNavigation();

  const goToOtherPage = () => {
    if (nickname === myNickname) {
      navigation.navigate('MyPageStackScreen');
    } else {
      navigation.navigate('OtherPage', {userId: userId});
    }
  };

  const handleLikeClick = () => {
    if (isLike) {
      setFeedDislike(
        feedId,
        (res: any) => {
          setIsLike(!isLike);
        },
        (err: any) => {
          console.log(err.response);
        },
      );
    } else {
      setFeedLike(
        feedId,
        (res: any) => {
          setIsLike(!isLike);
        },
        (err: any) => {
          console.log(err.response.data);
        },
      );
    }
  };

  const handleCheckQuestClick = () => {
    navigation.navigate('MyQuest');
  };

  // const moveProfile = () => {
  //   navigate('OtherPage');
  // };

  return (
    <View style={styles.feedContainer}>
      <View style={styles.profileBar}>
        <View style={styles.userInfo}>
          <Pressable onPress={() => goToOtherPage()}>
            <Avatar.Image size={50} source={{uri: userImage}} />
          </Pressable>
          <View style={{justifyContent: 'center', paddingHorizontal: 12}}>
            <Text style={[styles.gradeText, {color: gradeColorCode}]}>
              {colorName}
            </Text>
            <Text style={styles.userNameText}>{nickname}</Text>
          </View>
        </View>

        <Tooltip
          tooltipStyle={{marginTop: -5}}
          contentStyle={{backgroundColor: questColorCode}}
          arrowSize={{width: 10, height: 5}}
          isVisible={tooltipVisible}
          content={
            <View style={{padding: 10}}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontFamily: 'esamanru-Medium',
                  fontSize: 16,
                }}>
                <Icon name={iconName} color="white" size={16} /> {typeName}
                &nbsp; 퀘스트 :&nbsp;
                {questName.split('<br>').map(item => `${item} `)}
              </Text>
            </View>
          }
          onClose={() => setTooltipVisible(false)}
          placement="bottom"
          backgroundColor="rgba(0,0,0,0)">
          <TouchableOpacity
            style={{width: 40, height: 40, marginRight: 5}}
            onPress={() => {
              setTooltipVisible(true);
              // setTimeout(() => {
              //   setTooltipVisible(false), console.log('2초 후에 실행됨');
              // }, 2000);
            }}>
            <Icon
              name={iconName}
              color={questColorCode}
              style={{fontSize: 32}}
            />
          </TouchableOpacity>
        </Tooltip>
      </View>
      <View style={styles.mediaContainer}>
        <Pressable>
          {feedType === 'IMAGE' ? (
            // <Image
            //   source={{uri: feedImage}}
            //   style={styles.image}
            //   blurRadius={isAccessable ? 0 : 10}
            // />
            <ImageBackground
              source={{uri: feedImage}}
              style={styles.image}
              blurRadius={isAccessable ? 0 : 30}>
              {isAccessable ? null : (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="eye-slash"
                    size={50}
                    color="#3B28B1"
                    style={{marginBottom: 10}}
                  />
                  <Text style={styles.noAccessText}>퀘스트를 완료하고</Text>
                  <Text style={styles.noAccessText}>
                    다른 친구들의 피드를 확인하세요
                  </Text>
                  <TouchableOpacity
                    style={styles.noAccessButton}
                    onPress={() => handleCheckQuestClick()}>
                    <Text style={styles.noAccessButtonText}>
                      퀘스트 완료하러 가기
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </ImageBackground>
          ) : (
            <View>
              {isAccessable ? (
                <Video
                  source={{
                    uri: feedImage,
                  }}
                  style={styles.video}
                  resizeMode="stretch"
                  repeat={true}
                  paused={!isAccessable}
                />
              ) : (
                <View
                  style={{
                    width: width,
                    height: width,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="eye-slash"
                    size={50}
                    color="#3B28B1"
                    style={{marginBottom: 10}}
                  />
                  <Text style={styles.noAccessText}>퀘스트를 완료하고</Text>
                  <Text style={styles.noAccessText}>
                    다른 친구들의 피드를 확인하세요
                  </Text>
                  <TouchableOpacity
                    style={styles.noAccessButton}
                    onPress={() => handleCheckQuestClick()}>
                    <Text style={styles.noAccessButtonText}>
                      퀘스트 완료하러 가기
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}
        </Pressable>
      </View>
      <View style={styles.infoBar}>
        <View style={{flexDirection: 'row'}}>
          <Pressable onPress={handleLikeClick}>
            {isLike ? (
              <FontAwesome name="heart" size={28} color={questColorCode} />
            ) : (
              <FontAwesome name="heart-o" size={28} color={questColorCode} />
            )}
          </Pressable>
          <TouchableOpacity
            onPress={handleCommentClick}
            style={{marginLeft: 25, marginTop: -2}}>
            <FontAwesome name="comment-o" size={28} color={questColorCode} />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.feedTimeText}>
            {timeToString(feedTime.split(' ')[0]) + feedTime.slice(10)}
          </Text>
        </View>
      </View>
      <View style={styles.commentBar}>
        {/* <Text>{commentList[0].userId}</Text>
        <Text>{commentList[0].commentContext}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feedContainer: {marginVertical: 4},
  profileBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  userInfo: {flexDirection: 'row'},
  gradeText: {fontFamily: 'esamanru-Bold', fontSize: 14},
  userNameText: {
    fontWeight: '600',
    fontSize: 20,
    color: 'black',
  },
  mediaContainer: {width: width, height: width},
  image: {width: width, height: width, resizeMode: 'cover'},
  video: {
    width: width,
    height: width,
    position: 'absolute',
  },
  noAccessText: {
    color: '#3B28B1',
    fontSize: 22,
    fontFamily: 'esamanru-Medium',
    marginBottom: 9,
  },
  noAccessButton: {
    padding: 16,
    backgroundColor: '#3B28B1',
    elevation: 3,
    borderRadius: 15,
  },
  noAccessButtonText: {
    color: 'white',
    fontFamily: 'esamanru-Medium',
    fontSize: 16,
  },
  infoBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  feedTimeText: {
    color: '#A7A7A7',
    fontFamily: 'esamanru-Medium',
    fontSize: 15,
  },
  commentBar: {},
});

export default FeedItem;
