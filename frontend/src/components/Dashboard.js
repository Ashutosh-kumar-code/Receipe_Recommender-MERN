import React from 'react'
import Nav from './Nav';
import UserList from './admin/UserList';
import ReceipeList from './admin/ReceipeList';
import Footer from './Footer';

const Dashboard = () => {
  return (
    <>
    <Nav/>
    
    <div className='container-fluid'>

    <div class="row">
  <div class="col-2">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">User List</a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Rceipe List</a>
      {/* <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Messages</a> */}
      {/* <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a> */}
    </div>
  </div>
  <div class="col-9">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"><UserList/></div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"><ReceipeList/></div>
      {/* <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div> */}
      {/* <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div> */}
    </div>
  </div>
</div>

    </div>

  <Footer/>
    </>
  )
}

export default Dashboard;
