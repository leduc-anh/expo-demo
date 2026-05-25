import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import SearchIcon from "../apps/search.svg.js";
import GridIcon from "../apps/grid.svg.js";

import ApproveIcon from "../apps/approve.svg.js";
import RewardIcon from "../apps/reward.svg.js";
import DisciplineIcon from "../apps/discipline.svg.js";
import LearningIcon from "../apps/learning.svg.js";
import TaskIcon from "../apps/task.svg.js";

import CareIcon from "../apps/care.svg.js";
import EventIcon from "../apps/event.svg.js";
import SurveyIcon from "../apps/survey.svg.js";
import DatingIcon from "../apps/dating.svg.js";
import PayslipIcon from "../apps/payslip.svg.js";
import BirthdayIcon from "../apps/birthday.svg.js";

import NewsIcon from "../apps/news.svg.js";
import StarIcon from "../apps/star.svg.js";
import EmployeeIcon from "../apps/employee.svg.js";
import GameIcon from "../apps/game.svg.js";

const SECTIONS = [
  {
    title: "WORK",
    data: [
      {
        id: "approve",
        title: "Approve Now",
        description:
          "Notify managers of pending requests and allow managers to approve/reject requests from internal tools",
        Icon: ApproveIcon,
      },
      {
        id: "reward",
        title: "Reward",
        description:
          "Send colleagues a thank you note or reward Gold for exceptional contribution",
        Icon: RewardIcon,
      },
      {
        id: "discipline",
        title: "Discipline",
        description:
          "Send a discipline warning to subordinates for violation of codes of conduct",
        Icon: DisciplineIcon,
      },
      {
        id: "learning",
        title: "Learning",
        description:
          "View a list of mandatory, registered and suggested learning courses; check-in and send feedback for each course",
        Icon: LearningIcon,
      },
      {
        id: "tasks",
        title: "My Tasks",
        description: "Manage your assigned tasks and approvals",
        Icon: TaskIcon,
      },
    ],
  },
  {
    title: "UTILITIES",
    data: [
      {
        id: "care",
        title: "FPT Care",
        description: "FPT Care",
        Icon: CareIcon,
      },
      {
        id: "events",
        title: "Events",
        description:
          "Register, check-in, check-out, send feedback to company events and programs",
        Icon: EventIcon,
      },
      {
        id: "survey",
        title: "Survey",
        description:
          "Conduct and collect responses for company-wide or department-wide surveys",
        Icon: SurveyIcon,
      },
      {
        id: "dating",
        title: "FPT Dating",
        description: "Dating feature.",
        Icon: DatingIcon,
      },
      {
        id: "payslip",
        title: "Payslip",
        description: "Payslip",
        Icon: PayslipIcon,
      },
      {
        id: "birthday",
        title: "Birthday",
        description:
          "Your birthday is a special moment. We're very happy to send the best wishes for you. Colleagues can send you birthday wishes on myFPT.",
        Icon: BirthdayIcon,
      },
    ],
  },
  {
    title: "NEWS",
    data: [
      {
        id: "news",
        title: "News",
        description:
          "A collection of latest news and notable events around the company",
        Icon: NewsIcon,
      },
      {
        id: "star",
        title: "Star Ave",
        description:
          "Recognise notable achievements within a business unit or within FPT",
        Icon: StarIcon,
      },
    ],
  },
  {
    title: "WIKI",
    data: [
      {
        id: "employee",
        title: "Employee Info",
        description:
          "Basic, non-confidential employee information (name, gender, department, etc)",
        Icon: EmployeeIcon,
      },
    ],
  },
  {
    title: "GAME",
    data: [
      {
        id: "game",
        title: "Game",
        description: "Community-engaging games with Gold as rewards",
        Icon: GameIcon,
      },
    ],
  },
];

const AllAppsScreen = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <ScrollView contentContainerStyle={styles.listContent}>
      <View style={styles.header}>
        <View style={styles.topBar}>
          <View style={styles.searchBox}>
            <SearchIcon width={16} height={16} />
            <TextInput
              placeholder="Type feature's name"
              placeholderTextColor="#A0A3AA"
              style={styles.searchInput}
            />
          </View>
          <TouchableOpacity style={styles.gridButton}>
            <GridIcon width={20} height={20} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>All Apps</Text>
      </View>

      {SECTIONS.map((section) => (
        <View key={section.title}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
          </View>
          {section.data.map((item) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.iconWrap}>
                <item.Icon width={42} height={42} />
              </View>
              <View style={styles.textWrap}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
              </View>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F7",
  },
  listContent: {
    padding: 16,
    paddingBottom: 110,
  },
  header: {
    marginBottom: 8,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#ECEDEF",
    borderRadius: 12,
  },
  searchInput: {
    marginLeft: 8,
    fontSize: 13,
    color: "#2B2F38",
  },
  gridButton: {
    marginLeft: 12,
    padding: 8,
    backgroundColor: "#ECEDEF",
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#151925",
  },
  sectionHeader: {
    marginTop: 18,
    marginBottom: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "#E6E7EA",
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#9AA0A6",
  },
  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#EFF0F2",
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F4FF",
  },
  textWrap: {
    flex: 1,
    marginLeft: 12,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#20232A",
  },
  itemDescription: {
    marginTop: 4,
    fontSize: 12,
    lineHeight: 16,
    color: "#6A6F7D",
  },
});

export default AllAppsScreen;
