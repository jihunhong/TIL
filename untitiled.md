
OAuth2Authentication authentication = (OAuth2Authentication) SecurityContextHolder.getContext().getAuthentication();

Map<String, String> map = (Map<String, String>) authentication.getUserAuthentication().getDetails();

session.setAttribute("user", User.builder()
																				.name(map.get("name"))
																				.email(map.get("email"))
																				.principal(map.get("id"))
																				.socialType(SocialType.GOOGLE)

																				);
