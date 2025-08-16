export const authors = [
  {
    id: '1',
    name: 'Mr. Saha Reno',
    image: 'https://aust.edu/storage/faculty_photo/041133.jpeg',
    bio: 'Assistant Professor',
    joinDate: 'January 2020'
  },
  {
    id: '2', 
    name: 'Mr. Ashek Seum',
    image: 'https://aust.edu/storage/faculty_photo/041115.jpeg',
    bio: ' Lecturer Grade-I',
    joinDate: 'March 2021'
  },
  {
    id: '3',
    name: 'Ms. Tahsina Muthaki',
    image: 'https://aust.edu/storage/faculty_photo/041144.jpeg',
    bio: 'Lecturer Grade-II,AUST. ',
    joinDate: 'June 2019'
  },
  {
    id: '4',
    name: 'Ms. Tasnuva Binte Rahman',
    image: 'https://aust.edu/storage/faculty_photo/041134.jpeg',
    bio: 'Lecturer Grade-II',
    joinDate: 'September 2022'
  }
];

export const articles = [
  {
    id: '1',
    title: 'A Hybrid Consensus Algorithm to Overcome the Blockchain Trilemma',
    content: `Abstract:  Blockchain networks face a persistent challenge in achieving a balance between security, scalability, and decentralization, often referred to as the blockchain trilemma. Traditional consensus mechanisms such as Proof of Work (PoW), Proof of Stake (PoS), Proof of Authority (PoA), and Practical Byzantine Fault Tolerance (PBFT) generally prioritize one aspect at the cost of others, leading to inefficiencies in real-world applications. This research proposes a hybrid consensus algorithm that integrates the strengths of HBFT, SCP, PoA, and PBFT using a federated Byzantine agreement approach. By incorporating adaptive validation, dynamic quorum adjustments, redundancy strategies, and robust identity management, the algorithm strengthens security while improving throughput and fault tolerance. Empirical results show a transaction throughput of 527 TPS, latency of 45 ms, a 90.9% safeguard against double-spending, and a low fork probability of 10%, alongside a high decentralization score of 8.104/10. These findings indicate that the proposed approach effectively addresses the blockchain trilemma and offers a scalable, secure, and decentralized solution for modern blockchain networks.

1. Introduction:
Blockchain technology is a decentralized and distributed ledger system that ensures secure and transparent recording of transactions across interconnected networks. Each block is cryptographically linked to its predecessor, forming an immutable chain that prevents tampering and fraud. Within this system, the consensus mechanism plays a critical role, establishing agreement among participants regarding the validity of transactions. It ensures that all nodes maintain a consistent ledger and protects the network against malicious actors.

Despite its advantages, blockchain networks face the trilemma of balancing security, scalability, and decentralization. Enhancing one of these aspects often compromises the others. For instance, PoW provides high security but suffers from low scalability and energy inefficiency. PoS improves efficiency but introduces risks such as validator cartels and long-range attacks. PoA and PBFT improve throughput and reduce energy consumption but may compromise decentralization and fault tolerance. These limitations highlight the need for a novel consensus design that balances all three dimensions effectively.

2. Related Work:
Several approaches have been proposed to address blockchain consensus challenges. Manolache and Sergiu introduced PoA-based distributed decision-making but lacked scalability analysis. Xu and Zhu examined asynchronous PBFT for supply chain networks, yet scalability in large networks remained unaddressed. Ekparinya et al. studied Aura and Clique protocols, highlighting vulnerabilities in PoA but providing limited practical implementation guidance. Other studies, such as RAC-Chain for cross-chain applications and Proof of Fairness, explored hybrid and dynamic consensus methods. However, none achieved an optimal balance across the trilemma.

This study builds on these works by combining strengths from HBFT, SCP, PoA, and PBFT to develop a hybrid consensus that addresses the key limitations of existing protocols.

3. Methodology:
The proposed hybrid consensus algorithm employs a federated Byzantine agreement framework enhanced with multiple strategies to achieve security, scalability, and decentralization:

Adaptive Validation: The algorithm iteratively refines consensus decisions, dynamically adjusting validation criteria according to network conditions.

Redundancy and Overlapping Quorums: Fault tolerance is ensured through redundant quorum slices that maintain continuous consensus even if some nodes fail.

Temporal Efficiency Constraints: Each stage of consensus, from proposal to finalization, operates under strict time constraints, improving throughput and reducing latency.

Decentralized Decision-Making: Federated voting ensures collaborative agreement without relying on a central authority, enhancing transparency and trust.

Nomination and Ballot Protocol: Streamlines block selection and reduces the probability of forks, contributing to higher chain quality.

Identity Management and Security Protocols: Robust identity verification and decentralized fault detection protect the network against malicious entities.

Implementation was tested in a controlled 50-node network using high-performance computing resources, simulating diverse transaction loads and network conditions.

4. Results and Analysis:
The hybrid consensus algorithm was evaluated across multiple metrics:

Transaction Throughput: Achieved a maximum of 527 TPS, with an average of 495 TPS under sustained loads.

Latency: Reduced average transaction confirmation time to 45 ms.

Security: Demonstrated a 90.9% safeguard against double-spending attacks and a low fork probability of 10%.

Decentralization: Achieved a score of 8.104/10, indicating strong distributed governance and minimal centralization risk.

The system also maintained high fault tolerance, continuing consensus processing even when individual nodes failed. Compared with existing protocols, the hybrid consensus exhibited superior performance in balancing throughput, latency, security, and decentralization.

5. Discussion:
The results suggest that combining multiple consensus mechanisms can overcome limitations inherent in single-protocol designs. By leveraging the strengths of HBFT, SCP, PoA, and PBFT, the proposed approach ensures high security and decentralization without sacrificing scalability. This balance makes it suitable for various applications, including enterprise blockchains, supply chain management, IoT networks, and financial systems.

Temporal efficiency and adaptive validation are particularly valuable in real-world deployments, where network conditions and node behaviors can fluctuate. The redundant quorum approach ensures resilience, while robust identity management prevents attacks by malicious actors.

6. Limitations and Future Work:
While the hybrid consensus shows significant improvements, some limitations remain:

The current evaluation used a controlled 50-node network; performance in networks with thousands of nodes requires further investigation.

Energy consumption and resource efficiency have not been fully optimized.

Integration with public blockchain environments may pose additional challenges.

Future work will focus on:

Scaling the protocol to larger networks and heterogeneous environments.

Exploring further hybridization with newer consensus mechanisms.

Optimizing energy efficiency and resource utilization while maintaining throughput and fault tolerance.

7. Conclusion:This study presents a hybrid blockchain consensus algorithm that effectively addresses the blockchain trilemma by balancing security, scalability, and decentralization. Empirical results demonstrate high transaction throughput, low latency, fault tolerance, and strong decentralization, making the approach suitable for a wide range of applications. By integrating multiple consensus strategies with federated Byzantine agreement principles, the proposed algorithm provides a robust, scalable, and secure foundation for next-generation blockchain networks. Future research will focus on scaling, optimization, and integration with real-world blockchain systems to further enhance its capabilities.`,
    author: authors[0],
    date: 'January 15, 2025',
    section: 'Machine learning',
    subsection: 'block chain',
    featuredImage: 'https://th.bing.com/th/id/OIP.dbq4JWNkRvm7N8x6zHLq4gHaEJ?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
    reactions: { like: 242, love: 189, angry: 45, sad: 22 },
    comments: [
      {
        id: '1',
        author: authors[1],
        content: 'The hybrid consensus approach is quite promising. I particularly like how it balances scalability and decentralization while maintaining security.',
        date: 'January 16, 2025',
        reactions: { like: 12, love: 3, angry: 0, sad: 0 }
      },
      {
        id: '2',
        author: authors[2],
        content: 'Interesting results! The reported TPS and latency metrics suggest this method could be practical for real-world blockchain networks.',
        date: 'January 16, 2025',
        reactions: { like: 8, love: 5, angry: 0, sad: 1 }
      }
    ]
  },
  {
    id: '2',
    title: 'An Efficient Machine Learning Approach for Hardware Trojan Detection',
    content: `With the rapid globalization of integrated circuit (IC) design and manufacturing, ensuring hardware security has become a major challenge. Hardware Trojans—malicious modifications embedded in circuits—pose severe threats, including data leakage, system failure, and compromised performance. Traditional detection techniques often struggle with scalability, accuracy, and the ability to detect Trojans at different abstraction levels.

This work presents an efficient machine learning (ML)-based approach for detecting hardware Trojans. By extracting features such as power consumption, path delay, and switching activity, our model learns the subtle deviations introduced by malicious circuits. Supervised learning algorithms like Support Vector Machines (SVM), Random Forest, and Neural Networks are evaluated for classification accuracy.

Experimental results show that the ML-based method significantly improves Trojan detection rates while reducing false positives compared to conventional techniques. Moreover, the proposed approach is scalable, adaptable to different benchmark circuits, and requires less manual intervention.

In conclusion, machine learning offers a promising and cost-effective solution for enhancing hardware trust. Future work may involve deep learning models, real-time detection integration, and expanding the dataset to improve generalization across diverse hardware architectures.`,
    author: authors[1],
    date: 'January 12, 2025',
    section: 'Design',
    subsection: 'Machine learning',
    featuredImage: 'https://tse3.mm.bing.net/th/id/OIP.iGr75LWBNq4aT4VxwvQR0QHaF7?rs=1&pid=ImgDetMain&o=7&rm=3',
    reactions: { like: 98, love: 67, angry: 1, sad: 0 },
    comments: [
      {
        id: '3',
        author: authors[3],
        content: 'This is exactly what we needed!',
        date: 'January 13, 2025',
        reactions: { like: 15, love: 4, angry: 0, sad: 0 }
      }
    ]
  },
  {
    id: '3',
    title: 'Machine Learning in Modern Applications',
    content: `Machine learning is no longer confined to research labs and tech giants. Today, developers of all backgrounds can integrate ML capabilities into their applications using accessible tools and frameworks.

The democratization of machine learning has been driven by cloud services, pre-trained models, and user-friendly APIs. Services like TensorFlow.js enable running ML models directly in the browser, opening up new possibilities for client-side intelligence.

Natural language processing has seen remarkable advances with transformer models. Applications can now understand context, generate human-like text, and provide intelligent responses. This technology is revolutionizing chatbots, content creation, and search experiences.

Computer vision applications are becoming mainstream, from real-time image classification to augmented reality filters. WebRTC combined with ML models enables powerful applications that run entirely in the browser without requiring specialized hardware.

The key to successful ML integration is starting small and focusing on specific use cases. Rather than trying to build comprehensive AI systems, identify particular problems where ML can provide clear value and iterate from there.`,
    author: authors[2],
    date: 'January 10, 2025',
    section: 'Technology',
    subsection: 'Machine Learning',
    featuredImage: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    reactions: { like: 203, love: 156, angry: 3, sad: 1 },
    comments: [
      {
        id: '4',
        author: authors[0],
        content: 'TensorFlow.js has been a game-changer for our projects. Being able to run models client-side opens up so many possibilities for privacy-conscious applications.',
        date: 'January 11, 2025',
        reactions: { like: 18, love: 7, angry: 0, sad: 0 }
      },
      {
        id: '5',
        author: authors[3],
        content: 'The practical approach you describe is spot on. We started with a simple image classification feature and gradually expanded from there.',
        date: 'January 11, 2025',
        reactions: { like: 11, love: 2, angry: 0, sad: 0 }
      }
    ]
  }
];