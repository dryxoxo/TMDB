import { DarkTheme } from '@/themes/theme';
import typography from '@/themes/typography';
import { BlurView } from 'expo-blur';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tab() {
  return (
    <ScrollView style={{ backgroundColor: DarkTheme.background }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Now Playing test</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.tinyLogo}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://pbs.twimg.com/media/D4pgj_BVUAAbCTd.jpg:large',
              }}
            />
            <BlurView intensity={50} style={{ position: 'absolute', bottom: 0, width: '100%', height: 50, borderBottomEndRadius: 20, borderBottomStartRadius: 20, overflow: 'hidden', paddingHorizontal: 10 }}>
              <View style={{ height: '100%', justifyContent: 'space-evenly' }}>
                <Text style={{ fontSize: typography.MEDIUM, color: DarkTheme.text.primary, fontWeight: 600 }}>Avengers: End Game</Text>
                <Text style={{ fontSize: typography.SMALL, color: DarkTheme.text.muted }}>23 Januari 2024</Text>
              </View>
            </BlurView>
          </View>
          <View style={styles.tinyLogo}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/war-movie-poster-template-design-8a827e55c714a03ed2a554da291d625d_screen.jpg?ts=1602569332',
              }}
            />
            <BlurView intensity={50} style={{ position: 'absolute', bottom: 0, width: '100%', height: 50, borderBottomEndRadius: 20, borderBottomStartRadius: 20, overflow: 'hidden', paddingHorizontal: 10 }}>
              <View style={{ height: '100%', justifyContent: 'space-evenly' }}>
                <Text style={{ fontSize: typography.MEDIUM, color: DarkTheme.text.primary, fontWeight: 600 }}>The War</Text>
                <Text style={{ fontSize: typography.SMALL, color: DarkTheme.text.muted }}>13 Okt 2020</Text>
              </View>
            </BlurView>
          </View>
          <View style={styles.tinyLogo}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://images.bisnis.com/posts/2022/03/01/1505757/the-adam-project.jpg',
              }}
            />
            <BlurView intensity={50} style={{ position: 'absolute', bottom: 0, width: '100%', height: 50, borderBottomEndRadius: 20, borderBottomStartRadius: 20, overflow: 'hidden', paddingHorizontal: 10 }}>
              <View style={{ height: '100%', justifyContent: 'space-evenly' }}>
                <Text style={{ fontSize: typography.MEDIUM, color: DarkTheme.text.primary, fontWeight: 600 }}>The Adam Project</Text>
                <Text style={{ fontSize: typography.SMALL, color: DarkTheme.text.muted }}>23 Januari 2024</Text>
              </View>
            </BlurView>
          </View>
        </ScrollView>
        <View style={[styles.titleContainer, { marginTop: 25 }]}>
          <Text style={styles.title}>Trending</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{
            width: 300,
            marginLeft: 24,
            aspectRatio: 3 / 4
          }}>
            <Image
              style={[styles.image]}
              source={{
                uri: 'https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg',
              }}
            />
            <BlurView intensity={50} style={{ position: 'absolute', bottom: 0, width: '100%', height: 50, borderBottomEndRadius: 20, borderBottomStartRadius: 20, overflow: 'hidden', paddingHorizontal: 10 }}>
              <View style={{ height: '100%', justifyContent: 'space-evenly' }}>
                <Text style={{ fontSize: typography.MEDIUM, color: DarkTheme.text.primary, fontWeight: 600 }}>Inception</Text>
                <Text style={{ fontSize: typography.SMALL, color: DarkTheme.text.muted }}>23 Januari 2024</Text>
              </View>
            </BlurView>
          </View>
          <View style={{
            width: 300,
            marginLeft: 24,
            aspectRatio: 3 / 4
          }}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://images.squarespace-cdn.com/content/v1/5a7f41ad8fd4d236a4ad76d0/1669842753281-3T90U1EY5HUNCG43XERJ/A2_Poster_DC_v80_PAYOFF_221029_12trimHD.jpg',
              }}
            />
            <BlurView intensity={50} style={{ position: 'absolute', bottom: 0, width: '100%', height: 50, borderBottomEndRadius: 20, borderBottomStartRadius: 20, overflow: 'hidden', paddingHorizontal: 10 }}>
              <View style={{ height: '100%', justifyContent: 'space-evenly' }}>
                <Text style={{ fontSize: typography.MEDIUM, color: DarkTheme.text.primary, fontWeight: 600 }}>Avatar</Text>
                <Text style={{ fontSize: typography.SMALL, color: DarkTheme.text.muted }}>23 Januari 2024</Text>
              </View>
            </BlurView>
          </View>
          <View style={{
            width: 300,
            marginLeft: 24,
            aspectRatio: 3 / 4
          }}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://images.squarespace-cdn.com/content/v1/5a7f41ad8fd4d236a4ad76d0/1519108413282-IB1OJIZY1QP8JDLHJ6QU/WallE_poster_DC_v04.jpg?format=500w',
              }}
            />
            <BlurView intensity={50} style={{ position: 'absolute', bottom: 0, width: '100%', height: 50, borderBottomEndRadius: 20, borderBottomStartRadius: 20, overflow: 'hidden', paddingHorizontal: 10 }}>
              <View style={{ height: '100%', justifyContent: 'space-evenly' }}>
                <Text style={{ fontSize: typography.MEDIUM, color: DarkTheme.text.primary, fontWeight: 600 }}>Walle</Text>
                <Text style={{ fontSize: typography.SMALL, color: DarkTheme.text.muted }}>23 Januari 2024</Text>
              </View>
            </BlurView>
          </View>
          <View style={{
            width: 300,
            marginLeft: 24,
            aspectRatio: 3 / 4
          }}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://images.squarespace-cdn.com/content/v1/5a7f41ad8fd4d236a4ad76d0/1669842655316-VMCFFOYO5276UKL3H382/SW_ForceAwakens_TeaserComp_DC_v11.jpg?format=500w',
              }}
            />
            <BlurView intensity={50} style={{ position: 'absolute', bottom: 0, width: '100%', height: 50, borderBottomEndRadius: 20, borderBottomStartRadius: 20, overflow: 'hidden', paddingHorizontal: 10 }}>
              <View style={{ height: '100%', justifyContent: 'space-evenly' }}>
                <Text style={{ fontSize: typography.MEDIUM, color: DarkTheme.text.primary, fontWeight: 600 }}>Star Wars</Text>
                <Text style={{ fontSize: typography.SMALL, color: DarkTheme.text.muted }}>23 Januari 2024</Text>
              </View>
            </BlurView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15141F'
  },
  titleContainer: {
    marginLeft: 24,
    marginBottom: 24,
  },
  title: {
    fontSize: typography.HUGE,
    color: DarkTheme.text.primary,
    fontWeight: 900
  },
  tinyLogo: {
    width: 300,
    marginLeft: 24,
    aspectRatio: 16 / 9,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 28,
  }
});
