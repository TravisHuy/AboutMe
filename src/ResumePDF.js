// Cài đặt thư viện
// npm install @react-pdf/renderer

import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Image } from '@react-pdf/renderer';
import { MapPin } from 'lucide-react';

// Tạo style cho PDF
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#F5F5F5',
    padding: 30,
    fontFamily: 'Helvetica',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  profileCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileLocation: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 12,
    color: '#666',
  },
  profileContact: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  profileContactItem: {
    fontSize: 12,
    marginBottom: 3,
  },
  profileContactValue: {
    color: '#0066cc',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    borderBottom: '1px solid #eaeaea',
    paddingBottom: 5,
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#444',
  },
  workItem: {
    marginBottom: 15,
  },
  workHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  workTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 5,
  },
  workPeriod: {
    fontSize: 12,
    color: '#666',
  },
  workDuties: {
    paddingLeft: 15,
    fontSize: 12,
  },
  dutyItem: {
    marginBottom: 3,
  },
  projectItem: {
    marginBottom: 20,
  },
  projectTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  projectTags: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    marginBottom: 8,
  },
  projectTag: {
    backgroundColor: '#e0e0e0',
    padding: '3px 8px',
    borderRadius: 4,
    fontSize: 10,
  },
  projectLink: {
    fontSize: 11,
    color: '#0066cc',
    marginBottom: 5,
    textDecoration: 'none',
  },
  projectDescription: {
    fontSize: 12,
    color: '#444',
  },
  educationItem: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
  },
  educationDetails: {
    marginLeft: 10,
  },
  educationSchool: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  educationDegree: {
    fontSize: 12,
    color: '#444',
  },
  educationPeriod: {
    fontSize: 11,
    color: '#666',
  },
  aboutText: {
    fontSize: 12,
    lineHeight: 1.5,
    marginBottom: 10,
    color: '#444',
  },
});

// Component PDF
const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        {/* Profile Card */}
        <View style={[styles.card, styles.profileCard]}>
          <Text style={styles.profileName}>Ho Nhat Huy</Text>
          <View style={styles.profileLocation}>
            <Text>Ho Chi Minh City, Vietnam</Text>
          </View>
          <Text style={styles.profileContact}>Contact:</Text>
          <Text style={styles.profileContactItem}>
            Phone: <Text style={styles.profileContactValue}>0349299163</Text>
          </Text>
          <Text style={styles.profileContactItem}>
            Email: <Text style={styles.profileContactValue}>honhathuy098@gmail.com</Text>
          </Text>
        </View>

        {/* About Me */}
        <View style={styles.card}>
          <Text style={styles.aboutText}>
            As a junior Android developer, I have hands-on experience with various moible technologies, focusing on delivering Android
            solutions using Java, Kotlin. I have worked on developing user interfaces, creating responsive mobile apps, and
            integrating RESTful APIs. My experience includes using Android frameworks like Jetpack componenets (including ViewModel, LiveData, Room) and managing state
            with tools such as RecyclerView and Fragments. I am proficient with Git for version control and have collaborated
            effectively with teams using project management tools like JIRA and Trello.
          </Text>
          <Text style={styles.aboutText}>
            I am a fast learner, passionate about web development, and always eager to take on new challenges to
            expand my skill set. I thrive in team environments and am committed to delivering high-quality work.
          </Text>
        </View>

        {/* Experience */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Experience</Text>
          <Text style={styles.subsectionTitle}>Work history</Text>
          <View style={styles.workItem}>
            <View style={styles.workHeader}>
              <Text style={styles.workTitle}>Admin Dashboard</Text>
              <Text style={styles.workPeriod}>(May 2024 up to Present)</Text>
            </View>
            <View style={styles.workDuties}>
              <Text style={styles.dutyItem}>• Design and develop user interfaces for web application using React.js and Node.js</Text>
              <Text style={styles.dutyItem}>• Optimize website performance, ensuring a responsive</Text>
              <Text style={styles.dutyItem}>• Stay up-to-date with the latest trends in frontend development and the React</Text>
              <Text style={styles.dutyItem}>• Build and enhance user interfaces for the application, focusing on user experience</Text>
              <Text style={styles.dutyItem}>• Conduct testing and debugging to ensure robust application performance</Text>
            </View>
          </View>
        </View>

        {/* Projects */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Projects</Text>
          
          {/* Admin Dashboard - Frontend */}
          <View style={styles.projectItem}>
            <Text style={styles.projectTitle}>Admin Dashboard - Frontend</Text>
            <View style={styles.projectTags}>
              <Text style={styles.projectTag}>ReactJS</Text>
              <Text style={styles.projectTag}>Tailwind CSS</Text>
              <Text style={styles.projectTag}>Deploy to Vercel</Text>
            </View>
            <Text style={styles.projectLink}>https://admin-frontend-ochre.vercel.app</Text>
            <Text style={styles.projectDescription}>
              The Admin Dashboard frontend is a management interface that allows administrators to monitor and
              manage the application functionalities
            </Text>
          </View>
          
          {/* Admin Dashboard - Backend */}
          <View style={styles.projectItem}>
            <Text style={styles.projectTitle}>Admin Dashboard - Backend</Text>
            <View style={styles.projectTags}>
              <Text style={styles.projectTag}>ExpressJS</Text>
              <Text style={styles.projectTag}>MySQL</Text>
              <Text style={styles.projectTag}>JWT</Text>
              <Text style={styles.projectTag}>Deploy to Vercel</Text>
            </View>
            <Text style={styles.projectLink}>https://dev-to-backend-abx5.vercel.app</Text>
            <Text style={styles.projectDescription}>
              The Admin Dashboard backend is responsible for managing data, handling requests, and ensuring the
              security and functionality of the application.
            </Text>
          </View>
        </View>

        {/* Education */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Education</Text>
          <Text style={styles.subsectionTitle}>Credentials</Text>
          
          {/* University */}
          <View style={styles.educationItem}>
            <View style={styles.educationDetails}>
              <Text style={styles.educationSchool}>Ho Chi Minh City University of Agriculture and Forestry</Text>
              <Text style={styles.educationDegree}>Engineer degree in Software Engineering</Text>
              <Text style={styles.educationPeriod}>4.5 years program • Completed May 2024</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

// Component để tạo button download PDF
const PDFDownloadButton = () => (
  <PDFDownloadLink document={<ResumePDF />} fileName="HoNhatHuy_Resume.pdf">
    {({ blob, url, loading, error }) => (
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#0066cc',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        {loading ? 'Đang tạo PDF...' : 'Tải xuống CV dạng PDF'}
      </button>
    )}
  </PDFDownloadLink>
);

export { ResumePDF, PDFDownloadButton };