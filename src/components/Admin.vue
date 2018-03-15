<template>
  <main class="fixed-nav sticky-footer bg-dark" id="page-top" data-gr-c-s-loaded="true">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
        <a class="navbar-brand" href="index.html">Start Bootstrap</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Dashboard">
                    <a class="nav-link" href="#">
                        <i class="fa fa-fw fa-dashboard"></i>
                        <span class="nav-link-text">Dashboard</span>
                    </a>
                </li>
            </ul>
            <ul class="navbar-nav sidenav-toggler">
                <li class="nav-item">
                    <a class="nav-link text-center" id="sidenavToggler" style="cursor:context-menu;">
                        <i class="fa fa-fw fa-angle-left" style="visibility:hidden;"></i>
                    </a>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" data-toggle="modal" data-target="#exampleModal">
                        <i class="fa fa-fw fa-sign-out"></i>Logout</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="content-wrapper">
        <div class="container-fluid">
            <!-- Breadcrumbs-->
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="#">Dashboard</a>
                </li>
                <li class="breadcrumb-item active">My Dashboard</li>
            </ol>
            <!--Start: form -->
            <div class="container">
              <form>
                <div class="form-row">
                  <div class="col-md-2 d-flex justify-content-center align-items-end">
                   <label for="">Add Member</label>
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Full Name">
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Rank">
                  </div>
                  <div class="col-md-2">
                    <button type="submit" class="btn btn-danger"><i class="fa fa-plus" aria-hidden="true"></i> ADD</button>
                  </div>
                </div>
              </form>
            </div>
            <!-- Tables-->
            <div class="card mt-5">
              <div class="card-header">
                  <i class="fa fa-table"></i> Users Data Table</div>
              <div class="card-body">
                  <div class="table-responsive">
                      <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                          <thead>
                              <tr>
                                  <th>ID</th>
                                  <th>Name</th>
                                  <th>Rank</th>
                                  <th><i class="fa fa-edit"></i> Edit</th>
                                  <th><i class="fa fa-remove"></i> Remove</th>
                              </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>545</td>
                              <td>John Doe</td>
                              <td>A-98</td>
                              <td>
                                <button class='btn btn-outline-info col-12'><i class="fa fa-edit"></i> Edit</button>
                              </td>
                              <td>
                                <button class='btn btn-outline-info col-12'><i class="fa fa-remove"></i> Remove</button>
                              </td>
                            </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
              <div class="card-footer small text-muted">Created At</div>
          </div>
        </div>
        <!-- /.container-fluid-->
        <!-- /.content-wrapper-->
        <footer class="sticky-footer">
            <div class="container">
                <div class="text-center">
                    <small>Copyright © Your Website 2018</small>
                </div>
            </div>
        </footer>
        <!-- Scroll to Top Button-->
        <a class="scroll-to-top rounded" href="#page-top" style="display: none;">
            <i class="fa fa-angle-up"></i>
        </a>
        <!-- Logout Modal-->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
                    </div>
                    <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                        <a class="btn btn-primary" href="login.html">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
</template>

