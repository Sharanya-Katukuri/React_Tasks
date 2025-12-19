function Content() {
    return (

        <main className="content">
            <div className="left-sidebar">
                <img src="/back.jpeg" alt="" style={{ width: "100%" }} />
                <div className="sidebar-profile-info">
                    <img src="/me.jpeg" alt="profile" />
                    <h1>Sharanya Katukuri</h1>
                    <h3>Python FullStack Developer</h3>
                </div>
                <div className="list">
                    <ul>
                        <li>Your Profile views<span>52</span></li>
                        <li>Your Post views<span>810</span></li>
                        <li>Your Connections<span>205</span></li>
                    </ul>
                </div>
                <div class="sidebar-profile-link">
                    <a href="#"><img src="/items.png" alt="" />My items</a>
                    <a href="#"><img src="/premium.png" alt="" />Try Premium</a>
                </div>
                <div className="recent-item">
                    <h3>RECENT</h3>
                    <a href="#"><img src="/recent.png" alt="" />Web Development</a><br />
                    {/* <a href="#"><img src="/recent.png" alt=""/>User Interface</a> */}

                </div>

            </div>
            <section className="feed">
                <div className="create-post">
                    <div className="create-post-top">
                        <img src="/me.jpeg" alt="profile" />
                        <input type="text" placeholder="Start a post" />
                    </div>

                    <div className="create-post-actions">
                        <div className="action">
                            <img src="/video.png" alt="video" />
                            <span>Video</span>
                        </div>

                        <div className="action">
                            <img src="/photo.png" alt="photo" />
                            <span>Photo</span>
                        </div>

                        <div className="action">
                            <img src="/event.png" alt="article" />
                            <span>Write article</span>
                        </div>
                    </div>
                </div>
                <div className="post">
                    <h4>🎯Day 1 of My React JS Journey</h4>
                    <p>Today, I officially started learning React JS, one of the most powerful JavaScript libraries for building user interfaces.</p>
                    <p>Here’s what I explored on Day 1</p>
                    <h3>🔹 What is React?</h3>
                    <p>React is a JavaScript library used to build fast, interactive, and reusable UI components.</p>
                    <h3>🔹 Features of React</h3>
                    <p>✔ Component-based architecture</p>
                    <p>✔ Virtual DOM for better performance</p>
                    <p>✔ Reusable UI components</p>
                    <p>✔ One-way data binding</p>
                    
                </div>

            </section>
            <aside className="sidebar right">
                <div className="news-card">
  <h3>LinkedIn News</h3>
  <p className="news-subtitle">Top stories</p>

  <ul className="news-list">
    <li>
      <h4>Online learning platforms Coursera, Udemy grow</h4>
      <span>17h ago • 29,805 readers</span>
    </li>

    <li>
      <h4>The Big Ideas to shape 2026</h4>
      <span>1d ago • 5,877 readers</span>
    </li>

    <li>
      <h4>How GCC leaders can stay ahead</h4>
      <span>1d ago • 1,241 readers</span>
    </li>

    <li>
      <h4>Millionaire CEO club grows</h4>
      <span>23h ago • 965 readers</span>
    </li>

    <li>
      <h4>Bollywood bets on itself</h4>
      <span>19h ago • 268 readers</span>
    </li>
  </ul>
</div>
<div className="puzzle-card">
  <h4>Today’s puzzle games</h4>


  <div className="puzzle-item">
    <img src="/sudoku.png" alt="sudoku" />
    <div className="puzzle-text">
      <h5>Mini Sudoku #129</h5>
      <span>7 connections played</span>
    </div>
    <span className="arrow">›</span>
  </div>

  

</div>


                
            </aside>
        </main>

    );
}

export default Content;