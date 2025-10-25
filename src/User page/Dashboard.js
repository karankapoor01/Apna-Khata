import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div id='dashboard-container'>
        <div id='dashboard-menu'>
          <h1>Apna Khata</h1>
          <i id='home-i' class="ri-home-4-fill"></i><h4 id='dashboard-home'>Home</h4><br/>
          <i id='Entries-i' class="ri-book-3-fill"></i><h4 id='dashboard-Entries'>Entries</h4><br/>
          <i id='Paymnets-i' class="ri-money-rupee-circle-fill"></i><h4 id='dashboard-payments'>Payments</h4><br/>
          <i id='Reports-i' class="ri-file-chart-fill"></i><h4 id='dashboard-reports'>Reports</h4>
          <i id='Settings-i' class="ri-settings-4-fill"></i><h4 id='dashboard-settings'>Settings</h4>  
        </div>
        <div id='dashboard-detail'>
          <div id='dashboard-welcome'>
            <h1>Welcome, Karan!</h1>
            <i class="ri-account-circle-fill"></i>
          </div>
          <div id='dashboard-amountdetail'>
            <div id='dashboard-totalamount'>
            <p>Total Balance</p>
            <h1>₹15,200</h1>
          </div>
          <div id='dashboard-amountdue'>
            <p>Amount Pending</p>
            <h1>₹4,500</h1>
          </div>
          <div id='dashboard-amountreceived'>
            <p>Received</p>
            <h1>₹10,700</h1>
          </div>
          </div>
          <div id='dashboard-body'>
            <div id='dashboard-table'>
               <p id='dashboard-table-p'>Recent Transactions</p>
               <table id='dashboardbody-table'>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Type</th>
                  </tr>
                </thead>
               </table>
            </div>
          </div>
          <div id='dashboard-foooter'>
            <p>© 2025 Apna Khata | Made for Indian Shopkeepers 💼 | by Karan Kapoor❤️.</p>
          </div>
        </div>
    </div>
  )
}

export default Dashboard
