<template>
		<div id="content">
			<div id="logo">
				<b-col md="12">
					<router-link to="/">
						<img src="./../assets/logo.png">
					</router-link>
				</b-col>
			</div>

			<div v-for="(route, index) in routes" :key="index" :class="route.class">
				<b-col md="12">
					<router-link :to="route.path">
						<i :class="`fas ${route.icon} fa-2x`" style="color: rgb(228, 228, 228)"></i> 
            <!-- <span>Alunos</span> -->
					</router-link>
				</b-col>
			</div>

      <div class="route" id="logout">
				<b-col md="12">
					<a @click="logout">
						<i class="fas fa-sign-out-alt fa-2x" style="color: rgb(228, 228, 228)"></i> 
					</a>
				</b-col>
			</div>
		</div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  name: "SideBar",
  data() {
    return {
      routes: [
        {
          path: "/usuarios",
          icon: "fa-user-friends",
          class: "route"
        }
      ]
    };
  },

  created() {
    this.setCurrentRoute(this.$route);
  },

  methods: {
    logout() {
      Cookies.remove("PERSONAL-TOKEN");
      this.$router.push("Login");
    },
    setCurrentRoute(route) {
      this.routes
        .filter(r => route.path.includes(r.path))
        .map(r => (r.class = "route current-route"));
      this.routes
        .filter(r => !route.path.includes(r.path))
        .map(r => (r.class = "route"));
    }
  },

  watch: {
    $route(to) {
      this.setCurrentRoute(to);
    }
  }
};
</script>

<style>
#sidebar {
  height: 100%;
  background-color: #2f323a;
}

#logo {
  margin-bottom: 70px;
}

#logo img {
  height: 50px;
}

#content {
  padding-top: 20px;
  padding-bottom: 20px;
}

.current-route {
  background-color: #5093e1;
}

.route {
  padding-top: 10px;
  padding-bottom: 10px;
}

#logout {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  cursor: pointer;
}
</style>
