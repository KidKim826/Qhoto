import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useWindowDimensions} from 'react-native';
import {Remarkable} from 'remarkable';
import {RenderHTML} from 'react-native-render-html';

var md = new Remarkable();

const test =
  md.render(`위치기반서비스 이용약관에 동의하시면, **위치를 활용한 광고 정보 수신 등을 포함하는 Qhoto 위치기반 서비스**를 이용할 수 있습니다.

### 제 1 조 (목적)

이 약관은 Qhoto 주식회사 (이하 “회사”)가 제공하는 위치기반서비스와 관련하여 회사와 개인위치정보주체와의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.

### 제 2 조 (약관 외 준칙)

이 약관에 명시되지 않은 사항은 위치정보의 보호 및 이용 등에 관한 법률, 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 전기통신기본법, 전기통신사업법 등 관계법령과 회사의 이용약관 및 개인정보처리방침, 회사가 별도로 정한 지침 등에 의합니다.

### 제 3 조 (서비스 내용 및 요금)

① 회사는 위치정보사업자로부터 위치정보를 전달받아 아래와 같은 위치기반서비스를 제공합니다.

1. GeoTagging 서비스: 게시물 또는 이용자가 저장하는 콘텐츠에 포함된 개인위치정보주체 또는 이동성 있는 기기의 위치정보가 게시물과 함께 저장됩니다. 저장된 위치정보는 별도의 활용없이 보관되거나, 또는 장소를 기반으로 콘텐츠를 분류하거나 검색할 수 있는 기능이 제공될 수도 있습니다.
2. 위치정보를 활용한 검색결과 및 콘텐츠 제공 : 정보 검색을 요청하거나 개인위치정보주체 또는 이동성 있는 기기의 위치정보를 제공 시 본 위치정보를 이용한 검색결과, 주변결과(맛집, 주변업체, 교통수단 등), 번역결과를 제시합니다.
3. 이용자 위치를 활용한 광고정보 제공: 검색결과 또는 기타 서비스 이용 과정에서 개인위치정보주체 또는 이동성 있는 기기의 위치를 이용하여 광고소재를 제시합니다.
4. 이용자 보호 및 부정 이용 방지: 개인위치정보주체 또는 이동성 있는 기기의 위치를 이용하여 권한없는 자의 비정상적인 서비스 이용 시도 등을 차단합니다.
5. 길 안내 등 생활편의 서비스 제공: 교통정보와 길 안내 등 최적의 경로를 지도로 제공하며, 주변 시설물 찾기, 뉴스/날씨 등 생활정보, 긴급구조 서비스, 주소 자동 입력 등 다양한 운전 및 생활 편의 서비스를 제공합니다.

② 제1항 위치기반서비스의 이용요금은 무료입니다.

### 제 4 조 (개인위치정보주체의 권리)

① 개인위치정보주체는 개인위치정보 수집 범위 및 이용약관의 내용 중 일부 또는 개인위치정보의 이용ㆍ제공 목적, 제공받는 자의 범위 및 위치기반서비스의 일부에 대하여 동의를 유보할 수 있습니다.

② 개인위치정보주체는 개인위치정보의 수집ㆍ이용ㆍ제공에 대한 동의의 전부 또는 일부를 철회할 수 있습니다.

③ 개인위치정보주체는 언제든지 개인위치정보의 수집ㆍ이용ㆍ제공의 일시적인 중지를 요구할 수 있습니다. 이 경우 회사는 요구를 거절하지 아니하며, 이를 위한 기술적 수단을 갖추고 있습니다

④ 개인위치정보주체는 회사에 대하여 아래 자료의 열람 또는 고지를 요구할 수 있고, 당해 자료에 오류가 있는 경우에는 그 정정을 요구할 수 있습니다. 이 경우 회사는 정당한 이유 없이 요구를 거절하지 아니합니다.

1. 개인위치정보주체에 대한 위치정보 수집ㆍ이용ㆍ제공사실 확인자료
2. 개인위치정보주체의 개인위치정보가 위치정보의 보호 및 이용 등에 관한 법률 또는 다른 법령의 규정에 의하여 제3자에게 제공된 이유 및 내용

⑤ 회사는 개인위치정보주체가 동의의 전부 또는 일부를 철회한 경우에는 지체 없이 수집된 개인위치정보 및 위치정보 수집ㆍ이용ㆍ제공사실 확인자료를 파기합니다.단, 동의의 일부를 철회하는 경우에는 철회하는 부분의 개인위치정보 및 위치정보 수집ㆍ이용ㆍ제공사실 확인자료에 한합니다.

⑥ 개인위치정보주체는 제1항 내지 제4항의 권리행사를 위하여 이 약관 제13조의 연락처를 이용하여 회사에 요구할 수 있습니다.

### 제 5 조 (법정대리인의 권리)

① 회사는 만14세 미만 아동으로부터 개인위치정보를 수집ㆍ이용 또는 제공하고자 하는 경우에는 만14세 미만 아동과 그 법정대리인의 동의를 받아야 합니다.

② 법정대리인은 만14세 미만 아동의 개인위치정보를 수집ㆍ이용ㆍ제공에 동의하는 경우 동의유보권, 동의철회권 및 일시중지권, 열람ㆍ고지요구권을 행사할 수 있습니다.

### 제 6 조 (위치정보 이용·제공사실 확인자료 보유근거 및 보유기간)

1. 회사는 위치정보의 보호 및 이용 등에 관한 법률 제16조 제2항에 근거하여 개인위치정보주체에 대한 위치정보 수집·이용·제공사실 확인자료를 위치정보시스템에 자동으로 기록하며, 6개월 이상 보관합니다.

### 제 7 조 (서비스의 변경 및 중지)

① 회사는 위치기반서비스사업자의 정책변경 등과 같이 회사의 제반 사정 또는 법률상의 장애 등으로 서비스를 유지할 수 없는 경우, 서비스의 전부 또는 일부를 제한, 변경하거나 중지할 수 있습니다.

② 제1항에 의한 서비스 중단의 경우에는 회사는 사전에 인터넷 등에 공지하거나 개인위치정보주체에게 통지합니다.

### 제 8 조 (개인위치정보 제3자 제공 시 즉시 통보)

① 회사는 개인위치정보주체의 동의 없이 당해 개인위치정보주체의 개인위치정보를 제3자에게 제공하지 아니하며, 제3자 제공 서비스를 제공하는 경우에는 제공받는 자 및 제공목적을 사전에 개인위치정보주체에게 고지하고 동의를 받습니다.

② 회사는 개인위치정보를 개인위치정보주체가 지정하는 제3자에게 제공하는 경우에는 개인위치정보를 수집한 당해 통신단말장치로 매회 개인위치정보주체에게 제공받는 자, 제공일시 및 제공목적을 즉시 통보합니다.

③ 다만, 아래에 해당하는 경우에는 개인위치정보주체가 미리 특정하여 지정한 통신단말장치 또는 전자우편주소 등으로 통보합니다.

1. 개인위치정보를 수집한 당해 통신단말장치가 문자, 음성 또는 영상의 수신기능을 갖추지 아니한 경우
2. 개인위치정보주체가 개인위치정보를 수집한 당해 통신단말장치 외의 통신단말장치 또는 전자우편주소 등으로 통보할 것을 미리 요청한 경우

### 제 9 조 (8세 이하의 아동 등의 보호의무자의 권리)

① 회사는 아래의 경우에 해당하는 자(이하 “8세 이하의 아동 등"이라 함)의 보호의무자가 8세 이하의 아동 등의 생명 또는 신체보호를 위하여 개인위치정보의 이용 또는 제공에 동의하는 경우에는 본인의 동의가 있는 것으로 봅니다.

1. 8세 이하의 아동
2. 피성년후견인
3. 장애인복지법 제2조제2항제2호의 규정에 의한 정신적 장애를 가진 자로서 장애인고용촉진 및 직업재활법 제2조제2호의 규정에 의한 중증장애인에 해당하는 자(장애인복지법 제32조의 규정에 의하여 장애인등록을 한 자에 한정)

② 8세 이하의 아동 등의 생명 또는 신체의 보호를 위하여 개인위치정보의 이용 또는 제공에 동의를 하고자 하는 보호의무자는 서면동의서에 보호의무자임을 증명하는 서면을 첨부하여 회사에 제출하여야 합니다.

③ 보호의무자는 8세 이하의 아동 등의 개인위치정보 이용 또는 제공에 동의하는 경우 개인위치정보주체 권리의 전부를 행사할 수 있습니다

### 제 10 조 (개인위치정보의 보유목적 및 이용기간)

① 회사는 위치기반서비스를 제공하기 위해 필요한 최소한의 기간 동안 개인위치정보를 보유 및 이용합니다.

② 회사는 대부분의 위치기반서비스에서 개인위치정보를 일회성 또는 임시로 이용 후 지체없이 파기합니다. 단, ‘GeoTagging’ 서비스와 같이 이용자가 게시물, 콘텐츠와 함께 개인위치정보를 Qhoto 서비스에 게시 또는 보관하는 경우, 해당 게시물, 콘텐츠의 보관기간 동안 개인위치정보가 함께 보관됩니다.

### 제 11 조 (손해배상)

1. 개인위치정보주체는 회사의 위치정보의 보호 및 이용 등에 관한 법률 제15조 내지 26조의 규정을 위반한 행위로 손해를 입은 경우에 회사에 대하여 손해배상을 청구할 수 있습니다. 이 경우 회사는 고의 또는 과실이 없음을 입증하지 아니하면 책임을 면할 수 없습니다.

### 제 12 조 (분쟁의 조정)

① 회사는 위치정보와 관련된 분쟁에 대하여 개인위치정보주체와 협의가 이루어지지 아니하거나 협의를 할 수 없는 경우에는 방송통신위원회에 재정을 신청할 수 있습니다.

② 회사 또는 개인위치정보주체는 위치정보와 관련된 분쟁에 대해 당사자간 협의가 이루어지지 아니하거나 협의를 할 수 없는 경우에는 개인정보보호법에 따라 개인정보분쟁조정위원회에 조정을 신청할 수 있습니다.

### 제 13 조 (사업자 정보 및 위치정보 관리책임자)

① 회사의 상호, 주소 및 연락처는 다음과 같습니다.

상호: Qhoto주식회사

주소: 서울시 강남구 테헤란로 212, Qhoto 

전화번호: 1588-1588

② 회사는 다음과 같이 위치정보 관리책임자를 지정하여 이용자들이 서비스 이용과정에서 발생한 민원사항 처리를 비롯하여 개인위치정보주체의 권리 보호를 위해 힘쓰고 있습니다.

위치정보 관리책임자 : 정형진 CPO / DPO (개인정보 보호책임자 겸직)

메일 : [문의하기](https://help.Qhoto.com/support/mail/popup/mailInquiry.help?serviceNo=1074&categoryNo=15743)

### 부칙

#### 제1조 시행일

1. 2022년 11월 16일부터 시행되던 종전의 약관은 본 약관으로 대체하며, 본 약관은 2022년 11월 21일부터 적용됩니다.`);
// console.log(test);
const source = {
  html: test,
};

const tagsStyles = {
  body: {
    whiteSpace: 'normal',
    color: 'black',
  },
};

function LocationAgree({navigation}) {
  const {width} = useWindowDimensions();

  return (
    <ScrollView style={styles.container}>
      <RenderHTML
        contentWidth={width}
        source={source}
        tagsStyles={tagsStyles}
      />
      <View
        style={{
          alignItems: 'center',
          marginBottom: 10,
          backgroundColor: '#4B179F',
          justifyContent: 'center',
        }}>
        <Pressable
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
              lineHeight: 40,
              height: 40,
              width: 100,
            }}>
            확인
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
});

export default LocationAgree;
