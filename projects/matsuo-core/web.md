---
layout: two_column
left_column: matsuo_core_menu.html
title: "Matsuo Core Web Layer"
---

## Web module goal

## Content

{% highlight text %}
pl.matsuo.core
======================
.
└── web
├── annotation
│   └── WebConfiguration.java
├── controller
│   ├── AbstractController.java
│   ├── AbstractSimpleController.java
│   ├── exception
│   │   ├── RestProcessingExceptionHandler.java
│   │   └── ValidationExceptionHandler.java
│   ├── GenericListsController.java
│   ├── log
│   │   └── AccessLogController.java
│   ├── login
│   │   └── LoginController.java
│   ├── message
│   │   ├── AbstractMessageController.java
│   │   ├── IMessageRequestParams.java
│   │   ├── MailMessageController.java
│   │   ├── MultiMessage.java
│   │   ├── NoteMessageController.java
│   │   └── SmsMessageController.java
│   ├── numeration
│   │   ├── NumerationController.java
│   │   └── NumerationSchemaController.java
│   ├── organization
│   │   ├── OrganizationUnitController.java
│   │   ├── PartyController.java
│   │   ├── PayerController.java
│   │   ├── PersonController.java
│   │   └── SimpleParty.java
│   ├── params
│   │   └── IEntityQueryRequestParams.java
│   ├── print
│   │   ├── AbstractKeyValuePrintController.java
│   │   ├── AbstractPrintController.java
│   │   └── PrintController.java
│   ├── render
│   │   ├── BootstrapRendererController.java
│   │   └── IBootstrapRendererRequestParams.java
│   ├── report
│   │   └── ReportsController.java
│   └── user
│       ├── IBlockUserParams.java
│       ├── IChangePasswordParams.java
│       └── UserController.java
├── filter
│   ├── AbstractFilter.java
│   ├── AccessLogFilter.java
│   └── PermissionsFilter.java
├── mvc
│   ├── CustomDateFormat.java
│   ├── CustomJacksonModule.java
│   ├── FacadeBuilderHandlerMethodArgumentResolver.java
│   ├── MvcConfig.java
│   ├── SqlDateDeserializer.java
│   ├── SqlDateSerializer.java
│   ├── TimeDeserializer.java
│   └── TimeSerializer.java
├── scope
│   ├── ScopeConfig.java
│   └── WideSessionScope.java
└── view
├── BootstrapRenderer.java
├── HtmlElement.java
├── HtmlPart.java
└── HtmlText.java
{% endhighlight %}

## Usage