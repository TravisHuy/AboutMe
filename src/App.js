import React from 'react';
import './App.css';
import { MapPin } from 'lucide-react';


function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container">
       

        {/* Profile Card */}
        <div className="card profile-card">
          <div className="profile-image">
            <img src="/assets/travishuy.jpg" alt="Profile" />
          </div>
          <h1 className="profile-name">Ho Nhat Huy</h1>
          <div className="profile-location">
            <MapPin size={18} />
            <span>Ho Chi Minh City, Vietnam</span>
          </div>
          <div className="profile-contact">
            Contact:
          </div>
          <div className="profile-contact-item">
            Phone: <span className="profile-contact-value">03499299163</span>
          </div>
          <div className="profile-contact-item">
            Email: <span className="profile-contact-value">honhathuy098@gmail.com</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="card">
          <h2 className="section-title">Highlights</h2>
          <div className="highlight-item">
            <div className="highlight-icon">
              <img src="/assets/toeic.png" alt="Certificate" />
            </div>
            <div className="highlight-content">
              <a href='https://firebasestorage.googleapis.com/v0/b/gas24h7d.appspot.com/o/certificate_english.jpg?alt=media&token=8124677f-166a-468e-a895-26b4c06d705b'>Certificate in Conversational English</a>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="card">
          <p className="about-text">
            I’m a Junior Android Developer with 1.5 years of experience in Android development. I enjoy building robust and scalable applications, solving development challenges, and optimising performance. 
            I continuously learn new technologies and best practices to enhance my skills and deliver high-quality applications
          </p>
        </div>


        {/* Experience */}
        <div className="card">
          <h2 className="section-heading">Work history</h2>

          <div className="work-item">
            <div className="work-logo" style={{ background: 'linear-gradient(135deg, #6366F1, #EC4899)' }}>
              <img src="/assets/logo_inapp.png" alt="Company" />
            </div>

            <div className="work-content">
              <div className="work-header">
                <span className="work-position">NextGen</span>
                <span className="work-period">(February 2024 - January 2025)</span>
              </div>

              <ul className="work-duties">
                <li>Develop and maintain Android applications using Kotlin and Java in Android Studio</li>
                <li>Collaborate with senior developers to implement new features following MVVM, MVP architecture</li>
                <li>Learn and apply Android development best practices (Material Design guidelines, performance optimization)</li>
                <li>Troubleshoot and resolve issues in existing applications with guidance from team leads</li>
                <li>Participate in code reviews and contribute to maintaining code quality standards</li>
                <li>Write unit tests and assist in implementing CI/CD pipelines for Android projects</li>
                <li>Work with Android Jetpack components (Room, LiveData, ViewModel) and third-party libraries</li>
                <li>Collaborate with UX/UI designers to implement responsive and intuitive user interfaces</li>
              </ul>
            </div>

        </div>
{/* 
        <div className="work-item">
          <div className="work-logo" style={{ backgroundColor: '#8A2BE2' }}>  
            <img src="/assets/logo_congty.png" alt="Company" />
          </div>

          <div className="work-content">
            <div className="work-header">
              <span className="work-position">Admin Dashboard</span>
              <span className="work-period">(June 2023 to December 2023)</span>
            </div>

            <ul className="work-duties">
              <li>Design and develop user interfaces for web application using React.js and Node.js</li>
              <li>Optimize website performance, ensuring a responsive</li>
              <li>Stay up-to-date with the latest trends in frontend development and the React</li>
              <li>Build and enhance user interfaces for the application, focusing on user experience</li>
              <li>Conduct testing and debugging to ensure robust application performance</li>
            </ul>
          </div>
        </div> */}
      </div>

      {/* Projects */}
      <div className="card">
        <h2 className="section-title">Projects</h2>


        {/* Gas24h7 */}
        <div className="project-item">
          <div className="project-header">
            <h3 className="project-title">Gas24h7</h3>
            <div className="project-tags">
              <div className="project-tag">Kotlin</div>
              <div className="project-tag">Jetpack Compose</div>
              <div className="project-tag">Dagger2</div>
              <div className="project-tag">Retrofit</div>
              <div className="project-tag">Firebase</div>
              <div className="project-tag">MVP</div>
            </div>
          </div>
          <a href="https://github.com/TravisHuy/Gas24h_7App" className="project-link">
            https://github.com/TravisHuy/Gas24h_7App
          </a>
          <p className="project-description">
            Gas24h7 is a 24/7 gas ordering app that allows users to browse products, place orders, and track deliveries in real-time.
          </p>
        </div>


        {/* Customer Management */}
        <div className="project-item">
          <div className="project-header">
            <h3 className="project-title">Customer Management</h3>
            <div className="project-tags">
              <div className="project-tag">Kotlin</div>
              <div className="project-tag">Room</div>
              <div className="project-tag">MVVM</div>
            </div>
          </div>
          <a href="https://github.com/TravisHuy/CustomerManagermentApp" className="project-link">
            https://github.com/TravisHuy/CustomerManagermentApp
          </a>
          <p className="project-description">
            A customer management app that enables appointment scheduling and transaction note tracking, built with MVVM and Room for efficient data handling            </p>
        </div>

        {/* TravisHuyProgressBar */}
        <div className="project-item">
          <div className="project-header">
            <h3 className="project-title">TravisHuyProgressBar</h3>
            <div className="project-tags">
              <div className="project-tag">Kotlin</div>
              <div className="project-tag">Java</div>
              <div className="project-tag">Deploy to JitPack</div>
            </div>
          </div>
          <div className="project-description">
            <p>GitHub</p>
            <a href="https://github.com/TravisHuy/TravisHuyProgressBar" className="project-link">
              https://github.com/TravisHuy/TravisHuyProgressBar
            </a>
          </div>
          <div className="project-description">
            <p>JitPack</p>
            <a href="https://jitpack.io/#TravisHuy/TravisHuyProgressBar" className="project-link">
              https://jitpack.io/#TravisHuy/TravisHuyProgressBar
            </a>
          </div>
          <p className="project-description">
            TravisHuyProgressBar is a customizable progress bar with gradient effects, designed to visually represent completion status.
            It can be used to display voucher usage progress, loading indicators, or any application requiring visualized progress tracking.
          </p>
        </div>


        {/* CircleRecyclerview */}
        <div className="project-item">
          <div className="project-header">
            <h3 className="project-title">CircleRecyclerview</h3>
            <div className="project-tags">
              <div className="project-tag">Kotlin</div>
              <div className="project-tag">Java</div>
              <div className="project-tag">Deploy to JitPack</div>
            </div>
          </div>
          <a href="https://github.com/TravisHuy/CircleRecyclerview" className="project-link">
            https://github.com/TravisHuy/CircleRecyclerview
          </a>
          <p className="project-description">
            CircleRecyclerView is a library that enables circular list display, offering a smoother and more visually appealing experience than traditional RecyclerView.
            It is ideal for applications that display lists in a circular layout, such as menus, product carousels, or other creative UI designs.
          </p>
        </div>

        {/* TicTacToe */}
        <div className="project-item">
          <div className="project-header">
            <h3 className="project-title">TicTacToe</h3>
            <div className="project-tags">
              <div className="project-tag">Kotlin</div>
              <div className="project-tag">Jetpack Compose</div>
            </div>
          </div>
          <a href="https://github.com/TravisHuy/TicTacToe" className="project-link">
            https://github.com/TravisHuy/TicTacToe
          </a>
          <p className="project-description">
            TicTacToe is a classic tic-tac-toe game built with Jetpack Compose, offering both two-player mode and AI mode for playing against the computer.
          </p>
        </div>

      </div>

      {/* Education */}
      <div className="card">
        <h2 className="section-title">Education</h2>
        <h3 className="subsection-title">Credentials</h3>

        {/* University */}
        <div className="education-item">
          <div className="education-logo">
            <img src="/assets/logo_nlu.png" alt="University" />
          </div>
          <div className="education-details">
            <div className="education-school">Ho Chi Minh City University of Agriculture and Forestry</div>
            <div className="education-degree">Engineer degree in Software Engineering</div>
            <div className="education-period">4.5 years program • Completed May 2024</div>
          </div>
        </div>


      </div>
    </div>
    </div >
  );
}

export default App;