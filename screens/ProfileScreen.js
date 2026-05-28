import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Svg, { Rect, Path } from "react-native-svg";

import UserIcon from "../profile/user.svg.js";
import SettingIcon from "../profile/setting.svg.js";
import SupportProfileIcon from "../profile/support.svg.js";
import FaqProfileIcon from "../profile/question.svg.js";
import AdminProfileIcon from "../profile/admin.svg.js";
import IconLogoutNew from "../profile/logout.svg.js";
import ArrowRightIcon from "../profile/arrow.svg.js";
import CameraIcon from "../profile/camera.svg.js";

const BannerArt = () => (
  <Svg
    width="100%"
    height="100%"
    viewBox="0 0 360 120"
    preserveAspectRatio="xMidYMid slice"
  >
    <Rect width="360" height="120" fill="#2F7BFF" />
    <Rect y="76" width="360" height="44" fill="#1E5FD6" opacity={0.55} />

    <Rect x="0" y="30" width="76" height="90" fill="#79A7FF" opacity={0.95} />
    <Rect x="18" y="12" width="58" height="108" fill="#5D8EF4" opacity={0.9} />
    <Rect x="62" y="26" width="48" height="94" fill="#8DB6FF" opacity={0.85} />
    <Rect x="98" y="46" width="34" height="74" fill="#5D8EF4" opacity={0.8} />

    <Rect x="248" y="46" width="38" height="74" fill="#5D8EF4" opacity={0.8} />
    <Rect x="270" y="28" width="56" height="92" fill="#8DB6FF" opacity={0.85} />
    <Rect x="296" y="12" width="56" height="108" fill="#5D8EF4" opacity={0.9} />
    <Rect x="322" y="40" width="38" height="80" fill="#79A7FF" opacity={0.95} />

    <Path
      d="M135 120C165 94 197 94 227 120H135Z"
      fill="#5D8EF4"
      opacity={0.6}
    />
    <Path
      d="M102 120C142 84 220 84 258 120H102Z"
      fill="#8DB6FF"
      opacity={0.5}
    />
  </Svg>
);

const Row = ({ icon, label, onPress, isLast }) => (
  <TouchableOpacity
    style={[styles.row, isLast && styles.rowLast]}
    onPress={onPress}
  >
    <View style={styles.rowLeft}>
      <View style={styles.rowIcon}>{icon}</View>
      <Text style={styles.rowLabel}>{label}</Text>
    </View>
    <View style={styles.rowRight}>
      <ArrowRightIcon size={18} />
    </View>
  </TouchableOpacity>
);

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.banner}>
          <BannerArt />
        </View>
        <View style={styles.header}>
          <View style={styles.avatarWrap}>
            <View style={styles.avatar}>
              <Text style={styles.avatarLetter}>K</Text>
            </View>
            <View style={styles.camera}>
              <CameraIcon size={26} />
            </View>
          </View>
          <View style={styles.nameWrap}>
            <Text style={styles.name}>Phạm Quang Khang (KHANGPQ3)</Text>
            <Text style={styles.sub}>(BM SE)</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Row icon={<UserIcon />} label="My Profile" />
          <Row icon={<SettingIcon size={20} />} label="Settings" />
          <Row icon={<SupportProfileIcon size={20} />} label="Support" />
          <Row icon={<FaqProfileIcon size={20} />} label="FAQ" />
          <Row icon={<AdminProfileIcon size={20} />} label="Admin" />
          <Row
            icon={<IconLogoutNew width={20} height={20} />}
            label="Logout"
            isLast
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>myFPT Version 5.9.10</Text>
          <Text style={styles.footerText}>Copyright © FPT Software 2021</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFFFFF" },
  container: { paddingBottom: 28, backgroundColor: "#FFFFFF" },
  banner: {
    height: 120,
    backgroundColor: "#2F7BFF",
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 12,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  header: {
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: -44,
  },
  avatarWrap: { alignItems: "center" },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#DCE9FF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#FFFFFF",
    elevation: 2,
  },
  avatarLetter: { fontSize: 34, color: "#2F7BFF", fontWeight: "700" },
  camera: {
    position: "absolute",
    right: -6,
    bottom: 4,
  },
  nameWrap: { alignItems: "center", marginTop: 12 },
  name: { fontSize: 15, fontWeight: "700", color: "#151925" },
  sub: { fontSize: 12, color: "#6B7280", marginTop: 4 },
  card: {
    marginTop: 16,
    marginHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 2,
    elevation: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F1F3",
    justifyContent: "space-between",
  },
  rowLast: {
    borderBottomWidth: 0,
  },
  rowLeft: { flexDirection: "row", alignItems: "center" },
  rowIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    backgroundColor: "#EAF2FF",
  },
  rowLabel: { fontSize: 15, color: "#151925" },
  rowRight: { marginLeft: 12 },
  footer: {
    marginTop: 20,
    alignItems: "center",
    paddingVertical: 16,
  },
  footerText: { fontSize: 11, color: "#9AA0A6" },
});

export default ProfileScreen;
