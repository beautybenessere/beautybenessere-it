# DATABASE MODEL — BEAUTYBENESSERE.IT

## Stack previsto
- Firebase Firestore per i dati
- Firebase Auth per login admin/gestori
- Firebase Storage per logo, foto e media
- Google Maps Platform per mappe e coordinate
- Vercel/Next.js o Astro per front-end pubblico SEO

## Collection principali

### businesses
Attività presenti nel portale.

Campi indicativi:
- id
- name
- slug
- categoryId
- subcategoryIds
- description
- shortDescription
- address
- city
- province
- region
- postalCode
- latitude
- longitude
- phone
- whatsapp
- email
- website
- instagram
- facebook
- tiktok
- logoUrl
- coverImageUrl
- galleryImages
- videoUrls
- openingHours
- services
- searchKeywords
- isClaimed
- claimedByUserId
- claimStatus
- isVerified
- plan
- priorityLevel
- status
- createdAt
- updatedAt

### categories
Categorie principali.

Campi indicativi:
- id
- name
- slug
- description
- icon
- status
- sortOrder

### services
Servizi associabili alle attività.

Campi indicativi:
- id
- name
- slug
- categoryId
- description
- status

### users
Utenti admin e gestori.

Campi indicativi:
- id
- authUid
- name
- email
- phone
- role
- businessIds
- status
- createdAt
- updatedAt

Ruoli possibili:
- admin
- manager
- owner

### claimRequests
Richieste di rivendicazione attività.

Campi indicativi:
- id
- businessId
- businessName
- requesterName
- requesterEmail
- requesterPhone
- role
- message
- proofUrl
- status
- reviewedBy
- reviewedAt
- createdAt

Status possibili:
- pending
- approved
- rejected

### leads
Richieste ricevute dalle schede attività.

Campi indicativi:
- id
- businessId
- businessName
- name
- email
- phone
- message
- source
- status
- createdAt

### plans
Piani disponibili.

Campi indicativi:
- id
- name
- slug
- priceMonthly
- priceYearly
- features
- priorityLevel
- isActive
- createdAt
- updatedAt

Piani iniziali:
- Free
- Verificato
- Premium

### media
Archivio media caricati.

Campi indicativi:
- id
- businessId
- type
- url
- storagePath
- title
- alt
- sortOrder
- uploadedBy
- createdAt

Tipi:
- logo
- cover
- gallery
- video

### cities
Città gestite dal portale.

Campi indicativi:
- id
- name
- slug
- province
- region
- latitude
- longitude
- isFeatured
- createdAt

### regions
Regioni italiane.

Campi indicativi:
- id
- name
- slug
- isFeatured
- createdAt

## Storage consigliato
Percorsi Firebase Storage:

/businesses/{businessId}/logo/logo.jpg
/businesses/{businessId}/cover/cover.jpg
/businesses/{businessId}/gallery/photo-1.jpg
/businesses/{businessId}/gallery/photo-2.jpg
/businesses/{businessId}/videos/video-1.mp4

## Note video
Per MVP:
- preferire link YouTube/Vimeo;
- upload video diretto solo in fase successiva o per piani Premium;
- evitare video pesanti nella prima versione.
